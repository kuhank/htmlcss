function myfunction(callback) {
    setTimeout(() => {
        const data = { name: "kuhan", age: 21 };
        callback(data);
    }, 3000);
}
myfunction((data) => {
    console.log("data : " + JSON.stringify(data));
})