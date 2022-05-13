const CSV2JSON = require('csvtojson');
const JSON2CSV = require('json2csv');
const FileSystem = require('fs');

CSV2JSON()
  .fromFile('./Ven1.csv')
  .then((source) => {
    let len = source.length;
    for (let i = 1; i < len; i++) {
      let location = source[i]['location'];
      let gradeIdArray = JSON.parse(source[i]['listings']);
      if (gradeIdArray.len !== 0) {
        console.log('Location: ', location);
        gradeIdArray.forEach((grade) => {
          console.log('gradeId: ', grade['gradeId']['$oid'], ' ');
        });
      }
    }
  });
