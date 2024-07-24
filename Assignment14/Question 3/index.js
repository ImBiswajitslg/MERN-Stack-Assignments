const queryString = require('querystring');

const url = 'name=JohnDoe&age=25&address[city]=NewYork&address[zip]=10001&hobbies=sports&hobbies=music'
const parsedUrl = queryString.parse(url);
console.log(parsedUrl)
console.log(parsedUrl.name);
console.log(parsedUrl.age);
if (parsedUrl.address) {
  console.log(parsedUrl.address.city);
} else {
  console.log('address property not found');
}
console.log(parsedUrl.hobbies);