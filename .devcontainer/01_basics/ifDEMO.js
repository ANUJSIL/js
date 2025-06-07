let age = 22
if(age>=18){
    console.log("welcome to vote")
}
else{
    console.log("invalid age")
}

// print the 1 to 100 number

for(let i =1; i<=100;i++){
    console.log(i)
} 


// print the reverse 100 to 1 number


for(let i =100;i>=1;i--){
    console.log(i)
}


//check the number is odd

for(let i=1;i<=100;i++){
    if(i%2!=0){
        console.log(i)
    }

}

//check the number is even
for (let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

//check the number is even using function

function iseven(number){
    if(number%2==0){
    return true;

    }else{
        return false;
    }
    }
    console.log(iseven(4));
    console.log(iseven(7))
    console.log(iseven(8))


//count the how many number is odd


let count = 0
 for(let i=1; i<=100;i++){
    if(i%2!=0){
        console.log(i)
        count++
    }
 }
 console.log("count odd="+count)


 //count the how many number is odd or even

 let Count = 0
 let ccount=0
 for(let i=1; i<=100;i++){
    if(i%2!=0){
        console.log(i)
        Count++
    }
    else{
        ccount++
    }
       }

  console.log("count odd=" +Count)
  console.log("count even=" +ccount)      
