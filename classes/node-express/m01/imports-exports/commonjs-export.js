// Docs: https://nodejs.org/api/modules.html#moduleexports
// CommonJS modules always use module.exports; If exporting multiple variables, encase in { } and separate variables by a comma

const msg = "Just a basic Hello World!";
const logMsg = function() {
    console.log(msg);
};

module.exports = {
    msg,
    logMsg
};

// Directly assigning to exports with exports shortcut

exports.msg2 = "Just a basic Hello World!";
exports.logMsg2 = function(msg) {
    console.log(msg);
};

// Using module.exports as its own object

module.exports = {
    message: "Just a basic Hellow World!",
    logMessage: function(message) {
        console.log(message);
    }
};