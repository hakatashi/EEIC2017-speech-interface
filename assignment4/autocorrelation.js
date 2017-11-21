const fs = require('fs');
const {promisify} = require('util');
const csv = require('csv');
const {sum} = require('lodash');

(async () => {
	const buffer = await promisify(fs.readFile)(process.argv[2]);
	const rawData = await promisify(csv.parse)(buffer, {delimiter: ' '});
	const data = rawData.map(([datum]) => datum);

	const autocorrelation  = (τ) => (
		sum(data.map((value, index) => (
			value * data[(index + τ) % data.length]
		)))
	);

	const r0 = autocorrelation(0);

	const outdata = Array(512).fill().map((_, index) => (
		autocorrelation(index) / r0
	));

	process.stdout.write(outdata.join('\n'));
})();
