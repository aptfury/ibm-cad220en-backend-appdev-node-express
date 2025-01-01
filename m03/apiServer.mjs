import express from 'express';
import { jsonwebtoken as jwt } from 'jsonwebtoken';

const JWT_SECRET = "BigSecret";
const myapp = express();

myapp.get("/employees", (req, res) => {
    return res
        .status(401)
        .json({
            message: "Please login to access this resource."
        });
});

myapp.listen(5000, () => {
    console.log("API Server is localhost:5000.");
});