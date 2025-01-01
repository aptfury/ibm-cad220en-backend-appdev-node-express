import express from 'express';

const app = new express();

// Middleware to check for a specific password in query params
app.use((req, res, next) => {
    // check if pass query param matches expected value
    if (req.query.password !== "pwd123") {
        return res.status(402).send("This user cannot login.");
    }
    // Log the current time
    console.log(`Time: ${Date.now()}`);
    // Call next middleware function
    next();
});

// rout for home
app.get("/home", (req, res) => {
    return res.send("Hello World!");
});

// Start server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});