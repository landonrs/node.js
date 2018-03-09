const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


function handleMath(req, res){
var f_num = parseInt(req.query.f_number);
var s_num = parseInt(req.query.s_number);
var op = req.query.operation;
var result = null;

  if (op == "plus") {
    result = (f_num + s_num);
  }
  else if (op == "minus") {
    result = (f_num - s_num);
  } 
  else if (op == "divide") {
    result = (f_num / s_num);
  }
  else if (op == "multiply") {
    result = (f_num * s_num);
  }
  else {
    result = (":(");
  }
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h3>results of " + f_num + " " + op + " " + s_num + " " + "is " + result + "</h3>" );
  res.end()


}


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/calculator'))
  .get('/cResults.html', handleMath)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
