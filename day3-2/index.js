fs = require('fs');

const Fabric = {
  area: []
}
const Claims = {
  ds: [],
  record: [],
  overflow: 0,
  checkForOverlap: function (e) {
    this.overflow = 0;
    this.record.forEach(d => {
      for (let i = 0; i <= 2000; i++) {
        Fabric.area[i] = [];
        for (let j = 0; j <= 2000; j++) 
          Fabric.area[i][j] = 0;
      }
      for (let i = e.x; i < e.width; i++)
        for (let j = e.y; j < e.height; j++)
          Fabric.area[i][j]++
      for (let i = d.x; i < d.width; i++)
        for (let j = d.y; j < d.height; j++)
          Fabric.area[i][j]++
      for (let i = 0; i <= 2000; i++) 
        for (let j = 0; j <= 2000; j++)
          if (Fabric.area[i][j] >= 2) 
            this.overflow++  
    })
    if (this.overflow !== 0)
      console.log("found " + e.claimNumber);
}
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
  Claims.record.forEach(e => {
    Claims.checkForOverlap(e);
  })
})

