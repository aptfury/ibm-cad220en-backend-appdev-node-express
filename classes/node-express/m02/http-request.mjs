// Example of sending an HTTP Request to a weather service
import https from https;

let options = {
    host: 'w1.weather.gov',
    path: '/xml/current_obs/KSFO.xml'
};

let req = https.request(options, function(response) {
    let buffer = '';
    let result = ''; // Unsure about this, it wasn't used in the example

    response.on('data', function(chunk) {
        buffer += chunk;
    });

    response.on('end', function() {
        console.log(buffer);
    });
}).end();