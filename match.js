const { curry } = require('ramda');
const match = curry(function(what, str) {
    return str.match(what);
});

console.log(match(/\s+/g, 'hello world'));//[' ']

const matchSpaces = match(/\s+/g);
console.log(matchSpaces('helloworld'));//null

