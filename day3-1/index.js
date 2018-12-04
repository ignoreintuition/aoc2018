fs = require('fs');

const Fabric = {
  area: [],
  claim: function (e){
    for (let i = e.x + 1; i <= e.x + e.width; i++)
      for (let j = e.y + 1; j <= e.y + e.height; j++)
        Fabric.area[i][j]++;
  }
}
const Claims = {
  ds: [],
  record: [],
  duplicate: 0
};

fs.readFile('input.txt', 'utf8', function (err, data) {
  for (let i = 0; i <= 2000; i++){
    Fabric.area[i] = [];
    for (let j = 0; j <= 2000; j++) {
      Fabric.area[i][j] = 0;
    }      
  }
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
    Fabric.claim(e);
  })
  for (let i = 0; i <= 2000; i++)
    for (let j = 0; j <= 2000; j++)
      if (Fabric.area[i][j] > 1) 
        Claims.duplicate++;
  console.log(Claims.duplicate);
})

