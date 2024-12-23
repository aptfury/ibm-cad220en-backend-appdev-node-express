// Error Handling
import process from 'process';
import fs from 'fs';

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught: ${err}\n` + 
        `Origin: ${origin}\n`
    );
});

// HTTPS Server Creation
import https from 'https';
import { est } from './datetime.js';

const port = 8080;

function requestListener(req, res) {
    res.writeHead(200); // Status Code: OK (200)
    res.end(`The date today is ${est()}`);
};

const server = https.createServer(requestListener);

server.listen(port);
console.log(`Server listening to port: ${port}`);