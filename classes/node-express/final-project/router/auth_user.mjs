import express from 'express';
import jwt from 'jsonwebtoken';
import books from './booksdb.mjs';

const regd_users = express.Router();

let users = [];

// Check username against requirements when registering
function isValid(username) {
    return (username.length > 3 && /^[a-zA-Z]+$/.test(username));
}

// Check username and password against records
function authenticatedUser(username, password) {
    let validuser = users.filter((user) => user.username === username && user.password === password);

    return validuser.length > 0;
}

// Login registered users
regd_users.post('/login', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const username = req.query.username;
            const password = req.query.password;

            if (!username || !password) resolve('You did not provide a username and password.');

            if (authenticatedUser(username, password)) {
                let accessToken = jwt.sign({
                    data: password
                }, 'access', { expiresIn: 60 * 60 });

                req.session.authorization = {
                    accessToken, username
                };

                resolve(`Welcome back, ${username}!`);
            }

            resolve('Invalid login.');
        }
        catch (e) {
            reject(e);
        }
    })
    .then(
        (data) => res.send(data),
        (e) => console.log(e)
    );
});

// Add and Modify Book Reviews
regd_users.put('/auth/review/:isbn', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const review = req.query.review;
            const username = req.session.authorization['username'];
            const isbn = req.params.isbn;
            const book = books[isbn];
            const { title, author, reviews } = book;

            if (!isbn) resolve('A valid ISBN must be used to leave a review.');
            if (!book) resolve(`We did not find a book under ISBN-${isbn}.`);
            if (!review) resolve('You cannot leave a blank review.');
            if (username in reviews) {
                if (reviews[username] === review) resolve(`You already have a matching review for ${title}.`);

                reviews[username] = review;

                if (books[isbn]['reviews'][username] != review) resolve('There was an issue updating your review.');

                resolve(`Your review for ${title} by ${author} has been updated.`);
            }

            reviews[username] = review;

            if (!(username in reviews)) resolve('There was an issue adding your review.');

            resolve(`Your review for ${title} by ${author} has been added.`);
        }
        catch (e) {
            reject(e);
        }
    })
    .then(
        (data) => res.send(data),
        (e) => console.log(e)
    );
});

// Delete a book review
regd_users.delete('/auth/review/:isbn', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const isbn = req.params.isbn;
            const username = req.session.authorization['username'];
            const { title, author, reviews } = books[isbn];

            if (!(username in reviews)) resolve(`We could not find a review by ${username} for ${title}.`);

            delete reviews[username];

            resolve(`Your review for ${title} by ${author} has been deleted.`);
        }
        catch (e) {
            reject(e);
        }
    })
    .then(
        (data) => res.send(data),
        (e) => console.log(e)
    );
});

export { regd_users as authenticated, isValid, users };