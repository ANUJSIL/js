//singleton
//oobject litereals
const mysym =Symbol("key1")//mysym is a datatype
const JsUser = {
    name: "ANUJ",
    [mysym] :"mykey1",
    location: "KOLKATA",
    age: 21,
    email: "anuj@gmail.com",
    isloggedin: false,
    lastLongDays: ["MONDAY", "SUNDAY"]

};

console.log(JsUser);
console.log(JsUser["email"]);
console.log(JsUser[mysym])
