const url = require('url');

const myUrl = url.parse('http://www.example.com/path/name?name=JohnDoe');
console.log("Protocol: ",myUrl.protocol);
console.log("Hostname: ",myUrl.hostname);
console.log("Pathname: ",myUrl.pathname);
