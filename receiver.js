//Create a request to get the object
const http = require("http");
const v8 = require('v8');
const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '',
  method: 'GET',
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', data => {
    console.log(v8.deserialize(data));
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
