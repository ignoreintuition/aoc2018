fs = require('fs');

const Boxes = {
  ds: [],
  common: null,
  compare: function (c) {
    let control = c.split("");
    this.ds.forEach(e => {
      let test = e.split("");
      let count = 0;
      control.forEach((controlChar, i) => {
        if (controlChar === test[i]){
          count++;
          this.common = i;
        }
      })
      if (count === 25 ){
        console.log(control.join(''));
      }
    })
  }
};

fs.readFile('input.txt', 'utf8', function (err, data) {
  Boxes.ds = data.split("\n");
  Boxes.ds.forEach(control => {
    Boxes.compare(control);
  });
})

