function respInfo() {
    let date = new Date();
    let day = date.toLocaleDateString('en-US');
    let time = date.toLocaleTimeString('en-US');
    let hrs = date.getHours();
    let msg;

    if (hrs >= 0 && hrs < 6) {
        msg = `It\'s ${time}! Go to bed!`;
    }
    else if (hrs >= 6 && hrs < 12) {
        msg = `Good Morning! It\'s ${time} on ${day}`;
    }
    else if (hrs >= 12 && hrs < 18) {
        msg = `Good Afternoon! It\'s ${time} on ${day}`;
    }
    else if (hrs >= 18 && hrs < 24) {
        msg = `It\'s ${time} on ${day}! Have a good night!`;
    }
    else {
        msg = `${hrs} is not a useable time of day.`;
    };

    return msg;
}

export { respInfo };