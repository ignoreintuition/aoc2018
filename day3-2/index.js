fs = require('fs');

const Claims = {
  ds: [],
  record: [],
};

fs.readFile('input.txt', 'utf8', function (err, data) {
  Claims.ds = data.split("\n");
  Claims.ds.forEach(e => {
    Claims.record.push({
      'claimNumber': e.substr(0, e.indexOf('@') - 1),
      'x': Number(e.substr(e.indexOf('@') + 1, e.indexOf(',') - e.indexOf('@') - 1)),
      'y': Number(e.substr(e.indexOf(',') + 1, e.indexOf(':') - e.indexOf(',') - 1)),
      'width': Number(e.substr(e.indexOf(':') + 1, e.indexOf('x') - e.indexOf(':') - 1)),
      'height': Number(e.substr(e.indexOf('x') + 1, e.length - e.indexOf('x') - 1)),
    })
  });
  Claims.record.forEach( e => {

  })
})

