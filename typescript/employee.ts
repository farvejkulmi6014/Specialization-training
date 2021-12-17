interface Address{
city:string;
pincode:number

}

interface Employee extends Address{
    id:number;
    name:string;
   display():void;
}

var v:Employee={
    id: 1,
    name: "sameer",
    city: "ubl",
    pincode: 567827,
    display: function (): void {
        console.log("error aa gya bhai");
    }
};

console.log('json implementation--------------');
console.log(`hi me hu ${v.name} aur me ${v.city} ka rehne wala hu`)

class Manager implements Employee{
    id: number;
    name: string;
    city: string;
    pincode: number;

    constructor(id:number,name:string, city:string, pincode:number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.pincode=pincode;

    }
    display(): void 
    {
       console.log(`hi me hu ${this.name} aur me ${this.city} ka rehne wala hu`)
    }

}


console.log('employee ka implementation-------------------');
var employee:Manager = new Manager(1,'farvej', 'bnegaluru', 560091);
employee.display();