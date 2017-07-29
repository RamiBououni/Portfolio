'user strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const expReqProxy = require('express-request-proxy');

app.use(express.static('./public'));

app.listen(PORT, function(){
  console.log(`Your node is listening on port: ${PORT}`);
});



app.get('/github/*', function(req, res) {
  (expReqProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.githubToken}`
    }
  }))(req, res);
});

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root:'./public'});
})
