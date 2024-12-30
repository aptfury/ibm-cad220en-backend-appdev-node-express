import express from 'express';

const app = new express();

let loginDetails = [];

// root route
app.get("/", (req, res) => {
    res.send("Welcome to the express server.");
});

// send login details as json string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({
        "name": req.params.name,
        "login_time": new Date()
    });
    res.send(`${req.params.name}, You are logged in!`);
});

// dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// start server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});