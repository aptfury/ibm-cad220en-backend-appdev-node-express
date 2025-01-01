import { default as axios } from 'axios';

const connectToURL = (url) => {
    const req = axios.get(url);

    console.log(req);

    req.then(resp => {
        console.log('Fulfilled');
        console.log(resp.data);
    })
    .catch(err => {
        console.log(`Rejected for url: ${url}`);
        console.log(err.toString());
    });
}

connectToURL('VALID_URL');