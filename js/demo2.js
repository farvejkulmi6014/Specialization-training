// function abc(){
//     this.name="hello world";
//     console.log(this.name);
//     console.log(this.name.toLocaleLowerCase());
//     console.log(this.name.toLocaleUpperCase());
//     this.name= this.name.concat(' virat smith');
//     console.log(this.name);
//     console.log(this.name.slice(2,19));
//     console.log(this.name.replace('smith', 'kohli'));
//     console.log(this.name.endsWith('virat'));
//     console.log(this.name.endsWith('kohli'));
  
// }
// abc();

var cars=["toyota", "hundai", "maruti"];
cars[2]="fortuner";
cars.push("benz");
cars.pop();
for(var i=0; i<cars.length; i++){
    console.log(cars[i]);
}

console.log("---------------------------------------------");

var fruits= new Array();
fruits[0]= "apple";
fruits[1]="banana";

for (const items of fruits){
    console.log(items);
}

console.log("---------------------------------------------");

for (const items in fruits){
    console.log(items);
}

console.log("------------------------------------------------")
var date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
console.log(date.getUTCDay());

