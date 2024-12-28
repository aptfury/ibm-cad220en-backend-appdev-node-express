// Callback function with error snippet from lecture
import weather from weather;
let location = 'KSFO';

weather.current(location, function(error, temp_f) {
    if (error) {
        console.error(error);
        return;
    }

    console.log(
        "The current weather reading is %s degrees.",
        temp_f
    );
});

response.end("... ${temp_f}...")


// Passing an error object to the callback function
import https from https;

let options = {
    host: '',
    path: ''
};

let req = function (location, resultCallback) {
    https.request(options, function(res) {
        let buffer = '';
        let result = '';

        res.on('data', function(chunk) {
            buffer += chunk;
        });

        res.on('end', function() {
            parseString(buffer, function(error, result) {
                if (error) {
                    resultCallback(error);
                    return;
                }

                resultCallback(null, result.current_observation.temp_f[0]);
            });
        });
    }).end();
}

// Weather Example Main App
weather.current(location, function(temp_f) {
    console.log(location);
});

// Weather Example Custom Module - this callback will be sent to function(temp_f) in main app
let cur = function(location, resultCallback) {
    let options = {
        host: 'w1.weather.gov',
        path: '/xml/current_obs/' + location + '.xml'
    };

    https.request(options, function(resp) {
        let buffer = '';

        resp.on('data', function(chunk) {
            buffer += chunk;
        });

        resp.on('end', function() {
            parseString(buffer, function(error, result) {
                if (error) {
                    resultCallback(error);
                    return;
                }

                resultCallback(null, result.current_observation.temp_f[0]);
            });
        });
    }).end();
}