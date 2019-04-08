/*
var request = require('request');

request('https://sytantris.github.io/http-examples/', function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
});
*/
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?