function est() {
    let today = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    return today;
};

export { est };