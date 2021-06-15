var express = require('express');
var cors = require('cors');
require('dotenv').config()
require("./models/dbConfig");
const postsController = require("./controllers/postsController");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use("/api", postsController);




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
