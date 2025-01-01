// Example of user-defined promise
import prompt from 'prompt';
import fs from 'fs';

const methCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        let filename = prompt('What is the name of the file ?');
        try {
            const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
            resolve(data);
        } catch(err) {
            reject(err);
        }
    }, 3000);
});

console.log(methCall);

methCall.then(
    (data) => console.log(data),
    (err) => console.log("Error reading file.")
);

// Axios HTTPS Example
import axios from 'axios';

const connectToUrl = (url) => {
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        console.log("Fulfilled");
        console.log(resp.data);
    })
    .catch(err => {
        console.log("Rejected");
    });
}

connectToUrl("VALID_URL");