//Example of a simple class in TypeScript:
/*
class car{
    nm:string;
    model:number;
    brand:string;

    constructor(nm:string,model:number,brand:string){
        this.nm=nm;
        this.model=model;
        this.brand=brand;
    }
    display():void{
        console.log(`Car name: ${this.nm}, Model: ${this.model}, Brand: ${this.brand}`);
    }
}
let myCar = new car("Mustang", 2021, "Ford");
myCar.display();

let anotherCar = new car("Civic", 2020, "Honda");
anotherCar.display();
*/

//Example of a simple class in TypeScript:
/*
class person{
    per_name:string
    age:number
    email:string
    isactive:boolean

    constructor(nm:string,age:number,email:string,isactive:boolean){
        this.per_name=nm
        this.age=age
        this.email=email
        this.isactive=isactive
    }

    view():void{
        console.log(`My Name is ${this.per_name},I am ${this.age} Years old, My email id is ${this.email} and I am ${this.isactive}`)
    }

}
let member=new person('Anupam',26,'anupamn29',true)
member.view()
*/

//Example of a simple class in TypeScript:

class student{
    readonly stu_id:number
    nm: string
    em?:string
    static collage='GMIT'

    constructor(stu_id:number,nm:string,email?:string){
        this.stu_id=stu_id
        this.nm=nm
        this.em=email
        
    }

    display():void{
        console.log("My id is: ",this.stu_id)
        console.log("My Name is: ",this.nm)
        if(this.em){
            console.log("Email id is: ",this.em)
        }
        else{
            console.log("No mail")
        }
        console.log('My collage name: ',student.collage)
    }

    static update_coll(collage:string){
        student.collage=collage
    }
}
// let std=new student(1,"Anupam",'anupamn29.com')
// std.display()
 student.update_coll('MAKAUT')

let std1=new student(2,"Rupam")
std1.display()