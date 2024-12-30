// Creating a new Promise object and assigning it to the variable myPromise
const myPromise = new Promise((resolve, reject) => {

    // Simulating a condition with a boolean variable 'success'
    let success = true; 
  
    // If the condition is true, call resolve to mark the promise as fulfilled
    if (success) { 
      resolve("The operation was successful!");
    } else { 
      // If the condition is false, call reject to mark the promise as rejected
      reject("The operation failed!");
    } 
});

// Execute the promise and handle the fulfilled and rejected states
myPromise

  // Handle the resolved state of the promise
  .then((message) => { 
    // This block will execute if the promise is resolved
    console.log(message); // "The operation was successful!"
  }) 

  // Handle the rejected state of the promise
  .catch((error) => { 
    // This block will execute if the promise is rejected
    console.error(error); // "The operation failed!"
  });

// Import the 'fs' module and use its promise-based methods
const fs = require('fs').promises;

// Read the content of the file 'example.txt' with 'utf8' encoding
fs.readFile('example.txt', 'utf8')

  // Handle the resolved state of the promise
  .then((data) => { 
    // This block will execute if the file is read successfully
    console.log(data); // Print the file content to the console
  }) 

  // Handle the rejected state of the promise
  .catch((err) => { 
    // This block will execute if there is an error reading the file
    console.error('Error reading file:', err); // Print the error message to the console
  });

// Async function that wraps the operation
async function myAsyncFunction() {
    // Simulating a condition with a boolean variable 'success'
    let success = true;
  
    // If the condition is true, resolve with a success message
    if (success) {
      return "The operation was successful!";
    } else {
      // If the condition is false, throw an error to simulate rejection
      throw new Error("The operation failed!");
    }
}
// Using async function to handle Promise
async function executeAsyncFunction() {
    try {
      // Await the async function call to get the result
      const result = await myAsyncFunction();
      console.log(result); // Output the result if successful
    } catch (error) {
      console.error(error.message); // Handle and output any errors
    }
}
  
// Call the async function to execute
executeAsyncFunction();

// Import the axios library

const axios = require('axios');

// Using the axios.get method to make a GET request to the specified URL.

axios.get('https://api.example.com/data')

  // If the request is successful, the `.then` block is executed.

  .then(response => {
    // The response object contains the data returned from the server.
    // We log the `data` property of the response to the console.

    console.log(response.data);
  })

  // If there is an error during the request, the `.catch` block is executed.

  .catch(error => {
    
    // We log an error message to the console along with the error object.
    // This helps in debugging and understanding what went wrong with the request.
    
    console.error('Error fetching data:', error);
  });

  // Import the axios library.

const axios = require('axios');

// Data to be sent in the POST request. This is a JavaScript object containing the user information.
const data = {
  name: 'John Doe',
  age: 30
};

// Using the axios.post method to make a POST request to the specified URL with the data object.
axios.post('https://api.example.com/users', data)
  
// If the request is successful, the `.then` block is executed.
  .then(response => {
    
// The response object contains the data returned from the server.
// We log a message along with the `data` property of the response to the console.
    
    console.log('User created:', response.data);
  })
  // If there is an error during the request, the `.catch` block is executed.
  
    .catch(error => {
    // We log an error message to the console along with the error object.
    // This helps in debugging and understanding what went wrong with the request.
    
    console.error('Error creating user:', error);
  });

const axios = require('axios'); // For Node.js, or include via CDN for browser

// Asynchronous function to post data to an API
async function postData() {
    try {
        // Await the response from the Axios POST request
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo', // The title of the post
        body: 'bar',  // The body/content of the post
        userId: 1     // The user ID associated with the post
        });

        // Log the response data to the console
        console.log(response.data); 
    } catch (error) {
        // If there is an error, log the error message to the console
        console.error('Error posting data:', error); 
    }
}

// Call the async function to execute the request
postData();