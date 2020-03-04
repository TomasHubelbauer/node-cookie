const http = require('http');

http
  .createServer((request, response) => {
    switch (request.method + ' ' + request.url) {
      case 'GET /': {
        // Set up CORS for the browser site demo
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
        response.setHeader('Access-Control-Allow-Credentials', 'true');

        const nonce = Math.random().toString().slice('0.'.length);
        response.setHeader('Set-Cookie', `nonce=${nonce}; HttpOnly`);
        response.setHeader('Content-Type', 'text/html');
        response.write(`Set the nonce cookie with value ${nonce}. <a href="/?cookie" target="_blank">Read cookie</a>`);
        response.end();
        break;
      }
      case 'GET /?cookie': {
        // Set up CORS for the browser site demo
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
        response.setHeader('Access-Control-Allow-Credentials', 'true');

        const cookie = request.headers.cookie;
        response.write(`Got cookie value ${cookie}.`);
        response.end();
        break;
      }
      case 'GET /favicon.ico': {
        response.end();
        break;
      }
      default: {
        throw new Error(`Invalid route ${request.method + ' ' + request.url}.`);
      }
    }
  })
  .listen(8000);
