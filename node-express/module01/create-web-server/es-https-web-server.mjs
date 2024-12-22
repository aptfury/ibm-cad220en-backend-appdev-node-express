// UNCAUGHT EXCEPTION START
import process from process;
import fs from fs;

// Create uncaughtException event BEFORE https import and server creation - (catches too late?)
process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught: ${err}\n` +
        `Origin: ${origin}\n`,
    );
});
// UNCAUGHTEXCEPTION END

// IMPORT KEYWORD START
// crypto module must be supported
// must be set up to catch errors using the 'uncaughtException' process event
import https from https;

let serverKey = https.createServer((request, response) => { });

serverKey.listen(8080); // Set up server to listen; EX: PORT 8080
// IMPORT KEYWORD END

// IMPORT FUNCTION START
// when crypto module IS NOT supported
// errors can be caught with try/catch
let httpsAlt;
let serverFunc;

try {
    httpsAlt = await import('https');
} catch(err) {
    console.error('https support is disabled!');
}

serverFunc = httpsAlt.createServer((request, response) => { });

serverFunc.listen(8080); // Set up server to listen; EX: PORT 8080
// IMPORT FUNCTION END