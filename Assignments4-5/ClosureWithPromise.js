/*
Combining Promises and Closures
	a. Create a function createDataFetcher that returns an object with two methods: 
		fetchData and getData.
	b. The fetchData method should fetch data from an API and store it in a closure 
		variable.
	c. The getData method should return the fetched data.
	d. Demonstrate using the fetchData and getData methods.
*/
function createDataFetcher () {
	let fetchedData = null;
	
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
	
	function getData() {
		return fatchedData;
	}
	
	return {
		fetchData,getData 
	};
}
const dataFetcher = createDataFetcher();
dataFetcher.fetchData("https://jsonplaceholder.typicode.com/users").then(data => {
	console.log("Data fetch succesfully", data);
	const fetchedData = dataFetcher.getData();
    console.log('Data retrieved using getData:', fetchedData);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });