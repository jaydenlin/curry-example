const { curry } = require('ramda');
const getKey = curry((key, obj)=>{
    return obj[key];
});

const getName = getKey('name');
const getEmail = getKey('email');

// get 概念
// (key="email", obj)=>{
//     return obj["email"];
// }

console.log(getName({name: 'Jayden'}));
console.log(getEmail({email: 'Jayden@yahoo.com'}));

const names = [
    {name: 'Jayden'},
    {name: 'Alice'},
    {name: 'Bob'}
].map(getName);
console.log(names);