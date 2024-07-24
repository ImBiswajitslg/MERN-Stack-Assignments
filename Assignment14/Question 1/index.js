const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT =4500;
const pathTo = path.join(__dirname, 'contents', 'homepage.html');

const server = http.createServer((req, res) => {
	if(req.url === '/'){
		fs.readFile(pathTo, (err, data) => {
			if (err) {
				console.error("Error reading HTML file:", err);
				res.writeHead(500, { 'Content-Type' : 'text/plain' });
				res.end('Internal server error');
			}
			res.writeHead(201, { 'Content-Type' : 'text/html' });
			res.end(data); 
		});
	} else {
		res.writeHead(404, { 'Content-Type' : 'text/plain' });
		res.end("Page not found");
	}
});

server.listen(PORT, () => {
	console.log(`Server running at PORT : ${PORT}`);
})