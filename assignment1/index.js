const {Reader} = require('wav');
const fs = require('fs');
const gnuplot = require('gnuplot');
const {promisify} = require('util');
const {sum} = require('lodash');

const fileReader = fs.createReadStream(process.argv[2]);
const wavReader = new Reader();

wavReader.on('data', async (data) => {
	const series = Array(512).fill().map((_, index) => (
		data.readInt16LE(index * 2)
	))

	const autocorrelation  = (τ) => (
		sum(series.slice(0, series.length - τ).map((value, index) => (
			value * series[index + τ]
		)))
	);

	const r0 = autocorrelation(0);

	const outdata = Array(512).fill().map((_, index) => (
		autocorrelation(index) / r0
	));

	process.stdout.write(outdata.join('\n'));
});

fileReader.pipe(wavReader);
