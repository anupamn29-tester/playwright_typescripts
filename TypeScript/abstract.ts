/*
abstract class Animal{
    abstract makeSound():void
}
class Dog extends Animal{
    override makeSound(): void {
        console.log('Dog sound')
    }
}
let d1=new Dog()
d1.makeSound()
*/

abstract class Employee{
    name:string
    constructor(name:string){
        this.name=name
    }
    abstract calculateSalary():void
}
class FullTimeEmployee extends Employee{
    salary:number

    constructor(name:string,salary:number){
        super(name)
        this.salary=salary
    }

    override calculateSalary(): void {
        console.log(`${this.name}salay ${this.salary}`)
    }
}
class PartTimeEmployee extends Employee{
    hours:number
    constructor(name:string,hours:number){
        super(name)
        this.hours=hours
    }
    override calculateSalary(): void {
        let salary=this.hours*100
        console.log(`${this.name} salary ${salary}`)
    }
}
let full =new FullTimeEmployee("Anupam",50000)
full.calculateSalary()

let part =new PartTimeEmployee("Rahul",20)
part.calculateSalary()