import express from 'express';
import jwt from 'jsonwebtoken';
import session from 'express-session';
import { authenticated as customer_routes } from './router/auth_user.mjs';
import { general as general_routes } from './router/general.mjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/customer', session({
    secret: "fingerprint_customer",
    resave: true,
    saveUninitialized: true
}));

app.use('/customer/auth/*', function auth(req, res, next) {
    if (req.session.authorization) {
        token = req.session.authorization['accessToken'];
        jwt.verify(token, 'access', (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({
                    message: 'User not authenticated.'
                });
            }
        });
    } else {
        return res.status(403).json({
            message: 'User not logged in.'
        });
    }
});

const PORT = 5000;

app.use('/customer', customer_routes);
app.use('/', general_routes);

app.listen(PORT, () => console.log(`Server is running.`));