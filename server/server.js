const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendfile("index.html");
});

app.get('/read', cors(), (req, res) => {
  fs.readFile('file.txt', (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.post('/read', cors(), (req, res) => {

  let attachedText = "\n" + req.body.textarea;

  fs.appendFile('file.txt', attachedText, (err) => {
    if (err) {
      res.send("error");
    }
    res.send("done");
    res.end();
  });

});

app.listen(3000);
