// Error handling example
import https from https;

let options = {
    hostname: 'www.ibm.com',
    port: 80,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length
    }
};

let req = https.request(options, function(res) {
    let buffer = '';
    let result = ''; // Unsure about this, it wasn't used in the example

    response.on('data', function(chunk) {
        buffer += chunk;
    });

    response.on('end', function() {
        console.log(buffer);
    });
});

// Error Retrieval
req.on('error', function(e) {
    resultCallback(e.Message);
});

// Close Request
req.end();