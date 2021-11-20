const express = require('express');
const path = require('path');

const app = express();

console.log(process.cwd());
const cwd = process.cwd();
app.use(express.static(path.join(cwd, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(cwd, 'build', 'index.html'));
});

app.listen(5000);
