// intervalExample.js

let count = 0;

const interval = setInterval(() => {
  count++;
  console.log("Interval count:", count);

  if (count === 5) {
    clearInterval(interval);
    console.log("Interval cleared.");
  }
}, 1000);
