const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const PATH_TO = path.join(__dirname, "contents");

function compressTXTfile() {
	fs.readdir(PATH_TO, (err, files) => {
		if(err) {
			console.log(err);
			return;
		}
		files.forEach(file => {
			if(path.extname(file) === '.txt'){
				const inputFilePath = path.join(PATH_TO, file);
				const outputFilePath = inputFilePath + '.gz';

				fs.createReadStream(inputFilePath)
				.pipe(zlib.createGzip())
				.pipe(fs.createWriteStream(outputFilePath))
				.on('finish', () => {
					console.log(`Compressed ${file} to ${outputFilePath}`);
				});
			}
		});
	});
}

compressTXTfile();