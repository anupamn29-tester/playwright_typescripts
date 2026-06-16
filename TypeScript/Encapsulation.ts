/*
class BankAccount{
    private balance:number
    constructor(balance:number){
        this.balance=balance
    }
    deposit(amount:number){
        if(amount<=0){
            console.log('Invalid Ammount')
        }
        else{
            this.balance+=amount
        }
        console.log(this.balance)
    }
    withdraw(amount:number){
        if(amount>this.balance){
            console.log("Insufficient Balance")
        }
        else{
            this.balance-=amount
            console.log(`${amount} Widthdraw Successfully`)
        }
    }
    getBalance(){
        console.log(`Your Current balance ${this.balance}`)
    }
}

let member=new BankAccount(5000)
member.withdraw(500)
member.getBalance()
*/
/*
class Student{

    private _marks:number
    constructor(marks:number){
        this._marks = marks
    }


    get std_marks(){
        return this._marks
    }


    set updatemark(marks_add:number){

        if(marks_add<0){
            console.log("Invalid")
            return
        }
        this._marks =marks_add
    }

}

let std =new Student(100)
console.log(std.std_marks)

std.updatemark =200
console.log(std.std_marks)
*/

class Course{
    private _students:number

    constructor(_students:number){
        this._students=_students
    }

    enroll(count:number){
        if(count<=0){
            console.log("Invalid Num")
        }
        else{
            this._students+=count
        }
        console.log(this._students)
    }

    removeStudent(count:number){
        if(count<=0){
            console.log("Invalid Num")
            return
        }

            this._students-=count
    }

    get totalStudents(){
        return this._students
    }

    set updateStudents(count:number){
        if(count<0){
            console.log("Invalid")
            return
        }
        this._students =count
    }
}
let std1=new Course(100)
std1.enroll(10)
std1.removeStudent(20)
console.log(std1.totalStudents)
std1.updateStudents=500
console.log(std1.totalStudents)

