const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


function calculateRate(req, res){
var weight = parseFloat(req.query.weight);
var type = req.query.mailType;
var result = null;

if (type == 'stamped'){
  switch(weight) {
    case 1:
        result = 0.50;
        break;
    case 2:
        result = 0.71;
        break;
    case 3:
        result = 0.92;
        break;
    case 3.5:
        result = 1.13;
        break;
    default:
        result = "ERROR";
  }
}
else if (type == "metered"){
  switch(weight) {
    case 1:
        result = 0.47;
        break;
    case 2:
        result = 0.68;
        break;
    case 3:
        result = 0.89;
        break;
    case 3.5:
        result = 1.10;
        break;
    default:
        result = "ERROR";
  }
}
else if (type == "large envelope"){
  switch(weight) {
    case 1:
        result = 1.00;
        break;
    case 2:
        result = 1.21;
        break;
    case 3:
        result = 1.42;
        break;
    case 4:
        result = 1.63;
        break;
    case 5:
        result = 1.84;
        break;
    case 6:
        result = 2.05;
        break;
    case 7:
        result = 2.26;
        break;
    case 8:
        result = 2.47;
        break;
    case 9:
        result = 2.68;
        break;
    case 10:
        result = 2.89;
        break;
    case 11:
        result = 3.10;
        break;
    case 12:
        result = 3.31;
        break;
    case 13:
        result = 3.52;
        break;
    default:
        result = "ERROR";
  }
}
else if (type == "first-class packaged"){

  switch(weight) {
    case 1:
        result = 3.50;
        break;
    case 2:
        result = 3.50;
        break;
    case 3:
        result = 3.50;
        break;
    case 4:
        result = 3.50;
        break;
    case 5:
        result = 3.75;
        break;
    case 6:
        result = 3.75;
        break;
    case 7:
        result = 3.75;
        break;
    case 8:
        result = 3.75;
        break;
    case 9:
        result = 4.10;
        break;
    case 10:
        result = 4.45;
        break;
    case 11:
        result = 4.80;
        break;
    case 12:
        result = 5.15;
        break;
    case 13:
        result = 5.50;
        break;
    default:
        result = "ERROR";
  }
}

if(result != "ERROR"){
  result = parseFloat(result).toFixed(2);
}
var resultJson = {weight: weight, type: type, result: result };
res.render('results', resultJson)
}


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/results.html', calculateRate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
