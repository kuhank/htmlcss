let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed.");
    }
  });
  
  promise.then(result => console.log(result))
         .catch(error => console.error(error));

//   // promise example