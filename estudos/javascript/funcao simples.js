let funcaoA = () => {
    setTimeout(function () {
        console.log('Executou A:' + getDateTimeNow());
    }, 3000);
};

let funcaoB = () => {
    console.log('Executou B:' + getDateTimeNow());
};


let getDateTimeNow = () => {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds() + ":" +
        currentdate.getMilliseconds();

    return datetime;
}

funcaoA();
funcaoB();