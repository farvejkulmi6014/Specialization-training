// function emp(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
//     }
//     emp.prototype={
//     getDetails:function(){
//     console.log("inside the getdetails")
//     console.log("name "+this.name+"Age "+this.age+"salary "+this.salary)
//     return " ";
//     }
//     }
//     var e = new emp("farvej",21,25000)
//     e.getDetails();

// console.log('------------------------');




// class Car{

//     constructor(name,model,price){
//         this.name=name;
//         this.model=model;
//         this.price=price;
//     }


//     getCarDetails(){
//         console.log('name: '+ this.name+ '--- model: '+this.model+'---- price: '+this.price+'-----type:'+this.type);
//     }

  

// }


// class Hyundai extends Car{
//     constructor(name,model, price,type){
//         super(name,model,price);
//         this.type=type;
//     }

//     carType(){
//         console.log('car type is'+ this.type());
//     }
        
// }

// class Maruti extends Hyundai{
//     constructor(name,model, price,type){
//         super(name,model,price);
//         this.type=type;
//     }
// }


// var car=new Hyundai('hyundai', 'i20', 4000000,'sedan');
// car.getCarDetails();
// var car=new Maruti('Suzuki', '800', 00000, 'dabba');
// car.getCarDetails();

// console.log('----------------------------------------------------------------');




// var message=`this 
//          is a messege from 
//          microsoft`;
// console.log(message);

// console.log('----------------------------------------------------------------');


// var xyz = (x,y) => {
//     console.log(`the result is `)
//     return x+y;
// }
// console.log(xyz(10,20));

// console.log('----------------------------------------------------------------');



// class tim{
//     constructor(){
//         setTimeout(() => {
//             console.log('hi all im adam');
//         }, 3000);
        
//     }
// }

// var a=new tim;

// console.log('----------------------------------------------------------------');




// function add(...a) {
//     var b=0;
//     for (const i of a) {
//        b+=i;
//     }
//     console.log(b);
// }
// add(1,2);
// add(1,34,3,4);
// add(1,2,3,4,5,6);

// console.log('----------------------------------------------------------------');