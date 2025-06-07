const name = "ANUJ"
const repocount = 50

console.log('Hello MY Name is $(name) and my repo count is ${repocount}');

const gameName = new String("ANUJ-hc")


console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('J'));


const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "   ANUJ   "
console.log(newStringOne.trim()); //remove the space


const url ="https://ANUJ.com/ANUJ%20sil"
console.log(url.replace('%20' ,'_'))


console.log(url.includes('sundar'))

console.log(gameName.split('_'));