fs = require('fs');

const Boxes = {
  ds: [],
  twos: 0,
  threes: 0,
  checksum: null,
};

fs.readFile('input.txt', 'utf8', function (err, data) {
  Boxes.ds = data.split("\n");
  Boxes.ds.forEach(e => {
    let reducedBoxID = [];
    let uniqueIDs = [];
    let boxIDArray = e.split("").sort();
    boxIDArray.forEach(e => {
      if (uniqueIDs.indexOf(e) === -1)
        uniqueIDs.push(e);
    })
    uniqueIDs.forEach(e => {
      let c = boxIDArray.filter(d => d === e).reduce((accumulator, currentValue) => accumulator + 1, 0)
      reducedBoxID.push(c);
    })
    if (reducedBoxID.indexOf(2) !== -1)
      Boxes.twos++;
    if (reducedBoxID.indexOf(3) !== -1)
      Boxes.threes++;
  });
  Boxes.checksum = Boxes.twos * Boxes.threes;
  console.log(Boxes.checksum);
})
