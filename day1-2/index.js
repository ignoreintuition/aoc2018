fs = require('fs');

const Store = {
  ds: [],
  freq: 0,
  calibrate: null,
  history: [],
  match: function(){
    return this.history.find( e => {
      return this.freq === e;
    })    
  }
};

fs.readFile('input.txt', 'utf8', function(err, data){
  Store.ds = data.split("\n");
  let index = 0;
  do {
    Store.freq += (Number(Store.ds[index]))
    Store.calibrate = Store.match();
    Store.history.push(Store.freq);
    index = (index + 1) % Store.ds.length;
  } while(!Store.calibrate)
  console.log(Store.freq);
;})
