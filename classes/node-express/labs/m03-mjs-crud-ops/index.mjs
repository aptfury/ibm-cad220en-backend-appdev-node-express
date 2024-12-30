// Import express and user routes, create instance of express
import express from 'express';
import routes from './routes/users.mjs';

const app = express();
const PORT = 5000;

// Use JSON parsing middleware and user routes
app.use(express.json());
app.use("/user", routes);

// Start the server and log a message when it's running
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));