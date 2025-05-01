const helperPromise = function () {
    const promise = new Promise((resolve, reject) => {
        const x = "Hello";
        const y = "Hellok";
        if (x === y) {
            resolve("Success! Strings are same");
        }
        else {
            reject("Failure! Strings are not same");
        }
    }
    );
    return promise;
}

async function demoPromise() {
    try {
        const result = await helperPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    console.log("This is the end of the demoPromise function");
}

demoPromise();