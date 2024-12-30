// JSON Message
let json = '{"result":true, "count":42}';
let obj;

// Parse JSON
obj = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);

// Convert JS object to JSON string
let jsonString = JSON.stringify({
    x: 5,
    y: 6
});

console.log(jsonString); // Expected Output: "{"x":5,"y":6}"