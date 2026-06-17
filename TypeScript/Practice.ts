/*abstract class Shape {
    name:string
    constructor(name:string) {
        this.name=name
    }
    abstract area():void
}
class Square extends Shape{
    side:number
    constructor(name:string,side:number){
        super(name)
        this.side=side
    }
    override area(): void {
        console.log(`${this.name} Area: ${this.side*this.side}`)
    }
}
class Rectangle extends Shape{
    length:number
    width:number
    constructor(name:string,length:number,width:number){
        super(name)
        this.length=length
        this.width=width
    }
    override area(): void {
        console.log(`${this.name} area: ${this.length*this.width}`)
    }
}
let box:Square=new Square("Square",5) 
box.area()
let ret:Rectangle=new Rectangle("Rectangle",4,5)
ret.area()
*/
/*
class Student{
    static total:number=0
    name:string
    constructor(name:string){
        this.name=name
        console.log(Student.total++)

    }
     static showTotal(){
        console.log(this.total)
     }
}
let s1 =
new Student(
"Anupam"
)

let s2 =
new Student(
"Rahul"
)

Student.showTotal()
*/
/*
class Product{
    name:string
    private _stock:number
    static totalProducts:number=0

    constructor(name:string,_stock:number){
        this.name=name
        this._stock=_stock
        Product.totalProducts++
    }

    addStock(count:number){
        if(count>0){
            console.log(`Ava Product: ${this._stock+=count}`)
        }
        else{
            console.log("Invlide")
        }
    }
    sell(count:number){
        if(count>this._stock){
            console.log("Not Enough Stock")
        }
        else{
            console.log(this._stock-=count)
        }
    }
    get currentStock():number{
        return this._stock
    }
    static showTotalProducts(){
        console.log(`Total Products:${Product.totalProducts}`)

    }

}

let p1 =
new Product(
"Laptop",
10
)

p1.addStock(
5
)

p1.sell(
8
)

console.log(
p1.currentStock
)

let p2 =
new Product(
"Mouse",
20
)

Product.showTotalProducts()
*/
/*
class User{
    readonly id:number
    name:string
    private _age:number

    constructor(id:number,name:string,_age:number){
        this.id=id
        this.name=name
        this._age=_age
    }

    updateName(name:string){  
        this.name=name
    }
    updateAge(age:number){
        if(age>0){
            this._age=age
            return
        }
    }
    get userInfo(){
        return {id:this.id,name:this.name,age:this._age}
    }
    
}
let u =
new User(
101,
"Anupam",
25
)

u.updateName(
"Sourav"
)

u.updateAge(
30
)

console.log(
u.userInfo
)
*/
/*
class Person{
    public name:string
    protected age:number
    private salary:number

    constructor(name:string,age:number,salary:number){
        this.name=name
        this.age=age
        this.salary=salary
    }

    showPerson(){
        console.log(`Name:${this.name}`)
        console.log(`Age:${this.age}`)
        console.log(`Salary:${this.salary}`)
    }
}
class Developer extends Person{
    language:string
    constructor(name:string,age:number,salary:number,language:string){
        super(name,age,salary)
        this.language=language
    }
    showDeveloper(){
        console.log(`Name:${this.name}`)
        console.log(`Age:${this.age}`)
        console.log(`Language:${this.language}`)
    }
}
let dev =
new Developer(
"Anupam",
25,
50000,
"TypeScript"
)

dev.showPerson()

dev.showDeveloper()
*/

class Employe{

    readonly id:number
    name:string
    private _salary:number
    static totalEmployee:number=0

    constructor(id:number,name:string,salary:number){
        this.id=id
        this.name=name
        this._salary=salary
        Employe.totalEmployee++
    }

    updateName(name:string){
        this.name=name
    }

    updateSalary(salary:number){
        if(salary>0){
            this._salary=salary
        }
    }
    get employeeInfo(){
        return {id:this.id,name:this.name,salary:this._salary}
    }
    static showEmployeeCount(){
        console.log(Employe.totalEmployee)
    }
}
let emp1 =
new Employe(
101,
"Anupam",
50000
)

emp1.updateName(
"Rahul"
)

emp1.updateSalary(
60000
)

console.log(
emp1.employeeInfo
)

let emp2 =
new Employe(
102,
"Sourav",
40000
)
Employe.showEmployeeCount()