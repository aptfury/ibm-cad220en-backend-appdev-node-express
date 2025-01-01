import express from 'express';

const app = new express();

let userRouter = express.Router();
let itemRouter = express.Router();

// Middleware for user router to log query time
userRouter.use((req, res, next) => {
    console.log(`User query Time: ${Date()}`);
    next();
});


// Route for user requests with ID param
userRouter.get('/:id', (req, res, next) => {
    res.send(`User ${req.params.id} last successful login ${Date()}`);
});

// Middleware for item router to log query time
itemRouter.use((req, res, next) => {
    console.log(`Item query Time: ${Date()}`);
    next();
});

// Route for item requests w/ ID param
itemRouter.get('/:id', (req, res, next) => {
    res.send(`Item ${req.params.id} last enquiry ${Date()}`);
});

// Mount routers to paths
app.use('/user', userRouter);
app.use('/item', itemRouter);

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});