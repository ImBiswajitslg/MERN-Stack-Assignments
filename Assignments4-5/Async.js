/*
Handling Asynchronous Operations with Error Handling
	a. Create a function fetchDataWithRetry that takes a URL and a maximum retry count
		as parameters.
	b. Use a closure to maintain the retry count and a private function fetchData that
		returns a Promise for fetching data from the URL.
	c. Implement the fetchData function with error handling to retry fetching the data
		up to the maximum retry count.
	d. Demonstrate the function by calling fetchDataWithRetry with a URL and handling 
		the resolved data or errors.
*/

async function fetchDataWithRetry(url, maxRetryCount) {
  let retryCount = 0;

  while (retryCount <= maxRetryCount) {
    try {
      const data = await fetchData(url);
      return data; // Resolve with data if successful
    } catch (error) {
      retryCount++;
      if (retryCount <= maxRetryCount) {
        console.log(`Retry ${retryCount} for ${url}`);
      } else {
        throw new Error(`Failed to fetch data after ${maxRetryCount} retries. Error: ${error}`);
      }
    }
  }
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// Demonstration
const url = 'https://jsonplaceholder.typicode.com/users'; // Example URL
const maxRetries = 3;

fetchDataWithRetry(url, maxRetries)
  .then(data => {
    console.log('Fetched data:', data);
    // Handle data here
  })
  .catch(error => {
    console.error('Fetch error:', error);
    // Handle error here
  });
