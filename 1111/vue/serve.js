const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(bodyParser.text()); 

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// // 使用cors库进行跨域设置
// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: ['GET', 'POST'], 
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));


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
