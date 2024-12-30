#1 Add your own endpoint
- Create a list with the names of the month
  - Add an end point in the code to fetch a particular month from a list and return it to the user. If the number is invalid, it should return the appropriate error message.

```js
// Get month
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
app.get("/fetchMonth/:num", (req, res) => {
    let mm = req.params.num;

    if (mm < 1 || mm > 12) {
        res.send(`${mm} is not a valid month number.`);
    } else {
        res.send(months[mm - 1]);
    }
});
```

#2 Create an express server from scratch with nodemon
1. Create a directory/project
2. run `npm init` (n/a here)
3. run `npm install express --save`
4. run `touch index.js`
5. make changes in `package.json` to start the server with `npm start`. Include `start` under scripts.
6. from the command prompt run `npm start`
7. install nodemon package to auto restart the server when changes are made (save as dev dependency) `npm install --save-dev nodemon`
8. in `package.json` change start value to `nodemon index.js` and then run `npm start`.