fs = require('fs');

var inputBuffer = [];

fs.readFile('input.txt', 'utf8', function(err, data){
  let total = 0;
  inputBuffer = data.split("\n");
  inputBuffer.forEach(element => {
    total += (Number(element));
  });
  console.log(total);
;})
