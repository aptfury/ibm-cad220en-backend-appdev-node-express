### Promise Template
```js
new Promise((resolve, reject) => {
    try {

    }
    catch (e) {
        reject(e);
    }
})
.then(
    (data) => res.send(data),
    (e) => console.log(e)
);
```