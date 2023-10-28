const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 跨域设置，这样前端可以从不同的端口请求数据
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let topologyData = {};

app.post('/saveTopology', (req, res) => {
  topologyData = req.body;
  res.send({ status: 'OK' });
});

app.get('/getTopology', (req, res) => {
  res.send(topologyData);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
