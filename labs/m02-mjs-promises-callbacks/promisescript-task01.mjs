// Task One
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("6 second promise resolved");
    }, 6000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3 second promise resolved");
    }, 3000);
});

firstPromise.then((successMessage) => {
    console.log(`From Callback: ${successMessage}`);
    secondPromise.then((successMessage) => {
        console.log(`From Callback: ${successMessage}`);
    });
});