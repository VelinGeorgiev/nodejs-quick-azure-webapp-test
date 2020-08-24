const http = require('http');
const fetch = require('isomorphic-unfetch');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
	// res.end('Hello World');
	  
  const login = 'username'
  const password = 'password'
  var creds = new Buffer(`${login}:${password}`).toString('base64');
  console.log('creds')
  console.log(creds)
  console.log(`Basic ${creds}`)
  
  fetch("https://contoso.com", {
    headers: {
      "Authorization": `Basic ${creds}`
    }
  })
  .then(response => {
	console.log('response.ok')
    if (!response.ok) {
      //throw new Error(response.status);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(response.status);
    }
    return response.json();
  })
  .then(json => {
    console.log(json)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(json));
  })
  .catch(e => {
	console.log('error')
    console.log(e.toString())
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(e.toString());
  })
});

server.listen(port)
console.log(`Server running at http://127.0.0.1:3000/`)