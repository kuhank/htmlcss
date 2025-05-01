setImmediate(() =>
    console.log("SetImmediate is called")
);

Promise.resolve("Promise is resolved").then(console.log);

setTimeout(() => {
    console.log("time function is called");
}, 0);

process.nextTick(() => {
    console.log("Process.nexttick");
});