// CommonJS general - somewhat reliable but may experience problems without crypto support

// METHOD 1: This way of doing it should make it easier to catch and view errors
let https1;

try {
    https1 = require('https');
} catch (err) {
    console.error('https support is disabled!');
}

let server1 = https1.createServer((request, response) => { });

server1.listen(8080);  // Set up server to listen; EX: PORT 8080

// METHOD 2: Direct import without error catch
let https2 = require('https');

let server2 = https2.createServer((request, response) => { });

server2.listen(8080); // Set up server to listen; EX: PORT 8080