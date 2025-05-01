function mydata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "kuhan", age: 21 };
            resolve(data);
        }, 2000);
    });
}
mydata().then(
    (data) => {
        console.log("data : " + JSON.stringify(data));
    }
).catch((error) => {
    console.log("error : " + error);
}
);