import express from 'express';
import books from './booksdb.mjs';
import { isValid, users } from './auth_user.mjs';

const public_users = express.Router();

// Check if a username already exists
function doesExist(username) {
    let samename = users.filter((user) => {
        return user.username === username;
    })

    return samename.length > 0;
}

// Register a new user
public_users.post('/register', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const username = req.query.username;
            const password = req.query.password;

            if (!username || !password) resolve('Unable to register user. Please make sure you have provided a username and password.');
            if (!isValid(username)) resolve('Username must be more than 3 characters and must contain only letters');
            if (doesExist(username)) resolve('This username is taken!');

            users.push({
                "username": username,
                "password": password
            });

            resolve('User registration successful. You may now log in.');
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

// Get list of books
public_users.get('/', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            resolve(JSON.stringify(books, null, 4));
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

// Get book by ISBN
public_users.get('/isbn/:isbn', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const isbn = req.params.isbn;
            const book = books[isbn];

            if (!book) resolve(`We could not find a book with ISBN-${isbn}.`);

            resolve(JSON.stringify(book, null, 4));
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

// Get book by author
public_users.get('/author/:author', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const author = req.params.author;
            let hasAuthor = {};

            for (let isbn in books) {
                if (books[isbn]['author'] === author) hasAuthor[isbn] = books[isbn];
            };

            if (Object.keys(hasAuthor).length === 0) resolve(`We could not find any books by ${author}.`);

            resolve(JSON.stringify(hasAuthor, null, 4));
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

// Get book by title
public_users.get('/title/:title', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const title = req.params.title;
            let hasTitle = {};

            for (let isbn in books) {
                if (books[isbn]['title'] === title) hasTitle[isbn] = books[isbn];
            }

            if (Object.keys(hasTitle).length === 0) resolve(`We did not find any books named ${title}.`);

            resolve(JSON.stringify(hasTitle, null, 4));
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

// Get book reviews
public_users.get('/review/:isbn', (req, res) => {
    new Promise((resolve, reject) => {
        try {
            const isbn = req.params.isbn;
            const book = books[isbn];
            const { title, author, reviews } = book;

            if (!isbn) resolve(`You must enter a valid ISBN.`);
            if (!book) resolve(`We did not find a book with ISBN-${isbn}.`);

            resolve(`Here\'s what people have to say about ${title} by ${author}!\n\n${JSON.stringify(reviews, null, 4)}`);
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

export { public_users as general };