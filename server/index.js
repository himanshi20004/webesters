const express = require("express");
const path =require("path");
const app = express()
const port = 4000
let viewpath= path.join(__dirname,'views')


app.get('/', function(req, res) {
  res.sendFile('C:\Users\SWAPNIL JAIN\Desktop\github\team-websters\server\index.html');
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
