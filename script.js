//Javascript Tutorials #1

console.log(1);
console.log(2);

setTimeout(() => {
  console.log('callback function fire');
}, 2000);

console.log(3);
console.log(4);

//Javascript Tutorials #2

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);                         
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
request.send();

//JavaScript Tutorials #3

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);                         
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});

request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
request.send();

//JavaScript Tutorials #4

const getTodas = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

console.log(1);
console.log(2);

getTodas((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

//Javascript #5
const getTodas = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open('GET', "todas.json");
  request.send();
};


getTodas((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});







