import { Student} from './Student';

class principal extends Student{
    constructor(id:number, name:string,marks:number){
        super(id,name,marks);
    }
}

var pp:principal= new principal(1,'sonu',23);
console.log(pp.name);