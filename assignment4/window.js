const {Reader} = require('wav');
const fs = require('fs');
const gnuplot = require('gnuplot');
const {promisify} = require('util');
const {sum} = require('lodash');

const fileReader = fs.createReadStream(process.argv[2]);
const wavReader = new Reader();

wavReader.on('data', async (data) => {
	const series = Array(512).fill().map((_, index) => (
		(0.54 - 0.46 * Math.cos(2 * index * Math.PI / (512 - 1))) * data.readInt16LE(index * 2)
	))

	process.stdout.write(series.join('\n'));
});

fileReader.pipe(wavReader);
