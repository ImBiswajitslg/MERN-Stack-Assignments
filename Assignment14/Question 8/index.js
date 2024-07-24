const fs = require('fs');
const url = require('url');

try {
	fs.readFile('url.txt', 'utf8', (err, data) => {
		if(err) {
			console.log("Error occured: ",err);
			return;
		}
		const parseUrl = url.parse(data);
		console.log("Protocol: ", parseUrl.protocol);
		console.log("Hostname: ", parseUrl.hostname);
		console.log("Pathname: ", parseUrl.pathname);
		console.log("Query: ", parseUrl.query);
	});
} catch (error) {
	console.log(error);
}