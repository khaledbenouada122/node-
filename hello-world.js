const fs = require('fs');

const result = fs.readFileSync('hello.txt', {encoding: 'utf-8'});
console.log(result);
