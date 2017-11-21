const {Reader} = require('wav');
const fs = require('fs');
const gnuplot = require('gnuplot');
const {promisify} = require('util');
const csv = require('csv');

const WINDOW_SIZE = 230;

(async () => {
	const buffer = await promisify(fs.readFile)(process.argv[2]);
	const data = await promisify(csv.parse)(buffer, {delimiter: ' '});
	const windowedData = data.map(([re, im], index) => (
		(256 - WINDOW_SIZE < index && index < 256 + WINDOW_SIZE) ? [0, 0] : [re, im]
	));
	process.stdout.write(windowedData.map(([re, im]) => `${re} ${im}`).join('\n'));
})();
