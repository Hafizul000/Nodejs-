// console.log(__filename);

const path = require('path');

const mycurrentPath = __filename;

console.log(path.basename(mycurrentPath));

console.log(path.extname(mycurrentPath));


let pathObj = {

    dir : 'user/local',
    name : 'testFile',
    ext : '.js'
}
console.log(path.format(pathObj));