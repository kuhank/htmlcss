function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  }
  
  async function getData() {
    console.log("Fetching...");
    let data = await fetchData();
    console.log(data);
  }
  
  getData();
//   // async await example  