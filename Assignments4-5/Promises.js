/*
Using Promises and try...catch
	a. Create a function fetchData that returns a Promise.
	b. Use fetch to get data from an API endpoint (e.g., JSONPlaceholder).
	c. If the fetch is successful, resolve the Promise with the data.
	d. If there's an error (network issue, invalid URL, etc.), reject the Promise 
		with an appropriate error message.
	e. Call fetchData and handle the resolved data and errors using then, 
		catch, and finally
*/
function fetchData(url) {
	let promise = new Promise((response, error) => {
		fetch(url).then((res) => {
			if(!res.ok){
				throw new Error("Error occured");
			}
			return res.json();
		}).then(data => {
			fatchedData = data;
			response(data);
		}).catch(err => {
			error(err);
		});
	});
	return promise;
}

fetchData("https://jsonplaceholder.typicode.com/users").then(data => {
	console.log("Data fetch succesfully", data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });