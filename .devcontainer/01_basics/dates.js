//Dates


let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//convert to string method


console.log(myDate.toLocaleString());

console.log(typeof myDate);


let myCreateDate = new Date(2023, 0 , 23 , 5 , 3)
console.log(myCreateDate.toDateString());


//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

//'${newDate.getDay()} and the time'


newDate.toLocaleString('default',{
    weekday: "long",
    
})