module.exports.add = (a,b)=> a + b
const sub = (a,b)=> a - b
const div = (a,b) => a /b

module.exports.test = (a,b)=> add(a,b) / sub(a,b);


// module.exports = {
//     test,
//     add,
//     sub,
// }

// module.exports.add = add
// module.exports.test = test
// module.exports.sub = sub

// console.log(module);