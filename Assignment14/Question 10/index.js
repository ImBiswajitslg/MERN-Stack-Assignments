const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 4000;

const server = http.createServer((req, res) => {
	const url = req.url;
	const extension = path.extname(url);
	let contentType;
	switch (extension) {
		case '.html' :
			contentType = "text/html";
		    break;
		case '.css' :
			contentType = "text/css";
		    break;
		case '.js' :
			contentType = "application/javascript";
		    break;
		case '.json' :
			contentType = "application/json";
		    break;
		case '.jpg' :
			contentType = "image/jpeg";
		    break;
		default : 
			contentType = "text/html";    
	}
	if(url === '/') {
		res.writeHead(200, { 'Content-Type' : 'text/plain'})
		res.end("You are on the root folder");
	} else {
		const filePath = path.join(__dirname, 'public', url.substring(1));
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.status = 404;
				res.end("Page not found");
			} else {
				res.writeHead(200, {'Content-Type': contentType});
        		res.end(data);
			}
		});
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
})