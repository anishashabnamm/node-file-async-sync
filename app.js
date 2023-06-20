const fs = require('fs');
const filename = path.basename('C:/Users/Admin/NODE/mern_node/app.js')
console.log(filename)
const resolve = path.resolve('app.js')
console.log(resolve);

const join = path.join('bala', 'thors', 'johan.txt')
console.log(join);

const parse = path.parse('/Users/Admin/NODE/mern_node/app.js')
console.log(parse);

const format = path.sep({dir : 'C:/Users/Admin/', base: 'app.js'})
console.log(format)