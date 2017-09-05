const http = require('http');
const static = require('node-static');
const file = new static.Server();

const app = http.createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
});

app.listen(process.env.PORT || 3000);