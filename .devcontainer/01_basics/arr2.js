 const marvel_heroes = ['spiderman' , 'thor' ,'ironman']

 const dc_heroes =["flash" ,"superman", "Batman"]

 marvel_heroes.push(dc_heroes)


 //console.log(marvel_heroes)
 //console.log(marvel_heroes[3][1]);

 marvel_heroes.concat(dc_heroes)
 console.log(marvel_heroes);

 //const allHeroes = marvel_heroes.concat(dc_heroes)
 //console.log(allheroes);

 const all_new_heroes =[...marvel_heroes, ...dc_heroes]

 console.log(all_new_heroes);


 const another_array = [1 , 2, 3 ,4 ,5 ,6 ,7,[6,7,[4,5]]]

 const real_another_array = another_array.flat(Infinity)
 console.log(real_another_array);



console.log(Array.isArray("ANUJ"))
console.log(Array.from("ANUJ"))
console.log(Array.from({name:"ANUJ"})) //interesting



