'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('hahaah')

function logger() {

    console.log('My name is Jonas!#')

}


logger();
logger();




//function declaration
function a(age) {
    return 2000 - age
}


const age1 = a(1000);

const b = function (age) { return 2000 - age }
const age2 = b(1000);

console.log(age1, age2)


const c = age => 2000 - age;
const age3 = c(1000);


console.log(age1, age2, age3)



const arrowF = (nr1, nr2, nr3) => nr1 + nr2 + nr3;
console.log(arrowF(1, 2, 3))




const jonas = { a: 23, b: 33 }

console.log(jonas['a'])

const jjj = prompt('what?')

console.log(jjj)