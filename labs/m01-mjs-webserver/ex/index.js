// Import HTTP module
import http from 'http';

// Define request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    res.end("Hello, World!"); // Send the response "Hello, World!"
};

// Define port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start server and listen to specified port
server.listen(port);
console.log(`Server listening on port: ${port}`);