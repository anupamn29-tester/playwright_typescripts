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
/*
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
*/

//Example of a simple class in TypeScript:
/*
class employee{
    emp_name:string
    readonly emp_id:Number
    emp_mail?:string
    static emp_company:string='Ornet'

    constructor(emp_name:string, emp_id:Number,emp_mail?:string){
        this.emp_name=emp_name
        this.emp_id=emp_id
        this.emp_mail=emp_mail
    }
    display_data(){
        console.log("Emp_name is:",this.emp_name)
        console.log("Emp_id is: ",this.emp_id)
        if(this.emp_mail){
            console.log("Email id is: ",this.emp_mail)
        }
        else{
            console.log("No Emp_mail")
        }
        console.log('My comany name is: ',employee.emp_company)
    }

    static uodate_company(emp_company:string){
        this.emp_company=emp_company
    }
}
let Emp1=new employee('Anupam',1,'anupamn29@gmail.com',)
Emp1.display_data()

employee.uodate_company('Code..')

let Emp2=new employee('Anupam',2)
Emp2.display_data()
*/
/*
//Example of a simple class in TypeScript:
class bankaccount{
    accountHolder:string
    balance:number

    constructor(accountHolder:string,balance:number){
        this.accountHolder=accountHolder
        this.balance=balance
    }

    deposit(amount:number):void{
        if(amount<=0){
            console.log("Invalid Ammount")
            return
        }
        this.balance+= amount
        console.log("Deposited Balance is: ",amount)
    }

    withdraw(amount:number):void{
        if(amount<=0){
            console.log("Invalid Ammount")
            return
        }
        if(amount>this.balance){
            console.log("Insufficient Balance")
            return
        }
        this.balance-=amount
        console.log("Withdraw balance is :",amount)

    }
    showbalance():void{
        console.log("Current Balance: ",this.balance)
    }
} 
let myacc=new bankaccount("Anupam",1000)
myacc.deposit(500)
myacc.showbalance()
myacc.withdraw(1000)
myacc.showbalance()
*/


