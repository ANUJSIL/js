//  primitive

//7 type : string, Number , BOOlean , NULL, undefined , symbol , Bigint



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1243')
const anotherId =   Symbol('1243')
console.log(id==anotherId);




// reference Type (non primitive)

//Array, objects , Functions


const heroes = ["shaktiman" , "spiderman" ,"antman"];
let myobj = {
    name: "hitesh",
    age:22
}


const myfunction =function(){
    console.log("Hello world");
}

console.log(typeof heroes );