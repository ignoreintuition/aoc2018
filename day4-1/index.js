fs = require('fs');

const Dates = {
  ds: [],
  calendar: []
};

fs.readFile('input.txt', 'utf8', function (err, data) {
  Dates.ds = data.split("\n");
    Dates.ds.forEach(e => {
      let event = {
        dateStamp: e.substr(1, e.indexOf(' ') - 1),
        timeStamp: e.substr(e.indexOf(' ') + 1, e.indexOf(']') - e.indexOf(' ') - 1 ),
        details: e.substr(e.indexOf(']') + 2, e.length - e.indexOf(' ') - 1 ),
        guardNumber: null,
      };
      event.guardNumber =  (event.details.indexOf('Guard') > -1) ? event.details.substr(7, event.details.indexOf(' ', 7) - 7 ) : null; 
      console.log(event);
    })
})

