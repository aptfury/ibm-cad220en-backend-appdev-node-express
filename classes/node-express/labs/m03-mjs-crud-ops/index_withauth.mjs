import express from 'express';
import routes from './routes/users.mjs';
import jwt from 'jsonwebtoken';
import session from 'express-session';

const app = express();
const PORT = 5000;

// Initialize session middleware with options
app.use(session({
    secret: "fingerprint",
    resave: true,
    saveUninitialized: true
}));

// Middleware for user auth
app.use("/user", (req, res, next) => {
    // Check if user is authenticated
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken']; // Access Token

        // Verify JWT token for user auth
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user; // Set auth user data on the request object
                next(); // Proceed to the next middleware
            } else {
                return res.status(403).json({
                    message: "User not authenticated"
                }); // Return error if token verification fails
            }
        });
    } else {
        // Return error if no access token is found in the session
        return res.status(403).json({
            message: "User not logged in"
        });
    }
});

app.use(express.json());

app.use("/user", routes);

// Login endpoint
app.post("/login", (req, res) => {
    const user = req.body.user;

    if (!user) {
        return res.status(404).json({
            message: "Body Empty"
        });
    }

    // Generate JWT access token
    let accessToken = jwt.sign({
        data: user
    }, 'access', { expiresIn: 60 * 60 });

    // Store access token in session
    req.session.authorization = {
        accessToken
    }

    return res.status(200).send("User successfully logged in");
});

// Start server
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));