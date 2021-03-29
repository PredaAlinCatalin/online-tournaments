
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
var someObject = require('./bd.json')

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
  fs.readFile('bd.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let obj = JSON.parse(data); 
    obj.push({
      name: req.body.name,
      comment: req.body.comment
    }); //add some o
    let json = JSON.stringify(obj); 
    fs.writeFile('bd.json', json, 'utf8', (err) => {
      if (err) {
        throw err
      }
      console.log('the file has been saved')
       res.send({Status:'OK'});
     });
   }
})
})

app.get('/comments', (req, res) => { 
  fs.readFile('bd.json', 'utf8', (err, data) =>{
     if (err)
      console.log(err);
     else
      someObject = data;
     })
      res.send(someObject);
   }) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))