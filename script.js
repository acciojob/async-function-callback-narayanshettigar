//const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// define async function with callback parameter
async function fetchData(callback) {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const data = await response.json();
		callback(data.title);
	} catch (error) {
		console.log(error);
	}
}

// add click event listener to button
document.getElementById('btn').addEventListener('click', async () => {
	// call fetchData with callback function to display title in output div
	fetchData((title) => {
		document.getElementById('output').textContent = title;
	});
});
