import express from 'express';
import jwt from 'jsonwebtoken';
import session from 'express-session';

let users = [];

// Check if user exists
const doesExist = (username) => {
    let userswithsamename = users.filter((user) => {
        return user.username === username;
    });

    return userswithsamename.length > 0;
};

// Check if user is authenticated
const authenticatedUser = (username, password) => {
    let validusers = users.filter((user) => {
        return user.username === username && user.password === password;
    });
    return validusers.length > 0;
}

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(session({ secret: "fingerprint" })); // Middleware to handle sessions

// Middleware to authenticate users using JWT
app.use("/auth", function auth(req, res, next) {
    if (req.session.authorization) { // get the auth obj stored in the session
        token = req.session.authorization['accessToken']; // retrieve the token from auth obj
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({
                    message: "user not authenticated"
                });
            }
        });
    } else {
        return res.status(403).json({
            message: "user not logged in"
        });
    }
});

// Route to handle login
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(404).json({
            message: "Error logging in"
        });
    }

    if (authenticatedUser(username, password)) {
        let accessToken = jwt.sign({
            data: password
        }, 'access', { expiresIn: 60 * 60 });

        req.session.authorization = {
            accessToken, username
        };
        
        return res.status(200).send("user successfully logged in");
    } else {
        return res.status(208).json({
            message: "Invalid login. Check username and password"
        });
    }
});

// Route to handle user registration

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        if (!doesExist(username)) {
            users.push({
                "username": username,
                "password": password
            });
            return res.status(200).json({
                message: "user successfully registered. now you can login"
            });
        } else {
            return res.status(404).json({
                message: "user already exists!"
            });
        }
    }
    return res.status(404).json({
        message: "unable to register user"
    });
});

// Main endpoint to be accessed by authenticated users
app.get("/auth/get_message", (req, res) => {
    return res.status(200).json({
        message: "Hello, you are an authenticated user. Congratulations!"
    });
});

const PORT = 5000;

app.listen(PORT, () => console.log("Server is running"));