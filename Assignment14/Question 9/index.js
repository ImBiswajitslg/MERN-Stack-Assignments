const http = require('http');
const PORT = 5000;
const server = http.createServer((req, res) => {
	console.log(req.method);
	console.log(req.url);
	console.log(JSON.stringify(req.headers));
	//console.log(JSON.stringify(req.url.split('?')[1]));
	res.writeHead(200, { 'Content-Type' : 'text/plain' });
	res.end("Request received");
});

server.listen(PORT, () => {
	console.log(`Server running at port : ${PORT}`);
})