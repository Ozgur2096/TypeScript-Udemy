const names: Array<any> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 2000);
});

promise.then(result => {
  console.log(result);
});
