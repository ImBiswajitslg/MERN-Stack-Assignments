const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'users.json');
function updateJsonFile(){
	fs.readFile(FILE_PATH, 'utf8', (err, data) => {
		if(err) {
			console.log('Error occur while reading the file: ',err);
			return;
		}
		console.log(data);
		try {
			const writeData = JSON.parse(data);
			if (!Array.isArray(writeData)) {
        		console.error('Data is not a valid JSON array');
        		return;
      		}

			const updatedData = writeData.map(item => ({
				...item,
				lastModified : Math.floor(Date.now()/1000)
			}));

			const finalData = JSON.stringify(updatedData, null, 2);
			fs.writeFile(FILE_PATH, finalData, 'utf8', (err) => {
				if(err) {
					console.log("Error while writing");
				}
				console.log('Write succesful');
			});
		} catch (error) {
			console.error(error.stack);
		}
	})
}

updateJsonFile();