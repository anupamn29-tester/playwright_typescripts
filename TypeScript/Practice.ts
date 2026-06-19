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
/*
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
*/
/*
class BankAccount{
    readonly accountNumber:number
    owner:string
    private _balance:number
    static totalAccounts:number=0
    
    constructor(accountNumber:number,owner:string,_balance:number){
        this.accountNumber=accountNumber
        this.owner=owner
        this._balance=_balance

        BankAccount.totalAccounts++
    }

    deposit(amount:number){
        if(amount>0){
            this._balance+=amount
        }
        else{
            console.log("Ivalid ammount")
        }
    }
    withdraw(amount:number){
        if(amount<this._balance){
            this._balance-=amount
        }
        else{
            console.log("Insufficient Balance")
        }
    }
    transfer(target:BankAccount,amount:number){
        if(amount>this._balance){
            console.log('Insufficient Balance')
        }
        else{
            this._balance-=amount
            target._balance+=amount
        }
    }
    get accountInfo(){
        return {accountNumber:this.accountNumber,owner:this.owner,balance:this._balance}
    }
    
    static showTotalAccounts(){
        console.log(BankAccount.totalAccounts)
    }
}

let a1 =new BankAccount(101,"Anupam",10000)
let a2 =new BankAccount(102,"Rahul",5000)
a1.deposit(1000)
a1.withdraw(2000)
a1.transfer(a2,3000)
console.log(a1.accountInfo)
console.log(a2.accountInfo)

BankAccount.showTotalAccounts()
*/
/*
class ShoppingCart{
    readonly userId:number
    private products:string[] = []
    private prices:number[] = []
    static totalCart:number=0

    constructor(userId:number){
        this.userId=userId
        ShoppingCart.totalCart++
    }

    addProduct(product:string,price:number){
        if(price>0){
            this.products.push(product)
            this.prices.push(price)
        }
        else{
            console.log("Invalid Pro.")
        }
    }



  
 removeProduct(product:string){
    const index =this.products.findIndex(p=>p===product)
    if(index!==-1){
    this.products.splice(index,1)
    this.prices.splice(index,1)
   }
    else{
    console.log("Product Not Found")
   }

 }



calculateTotal(){
   return this.prices.reduce((sum,p)=>sum+p,0)
 }


 
    get cartInfo(){
        return{userId:this.userId,products:this.products,totalPrice:this.calculateTotal}
    }

    static showTotalCart(){
        console.log(ShoppingCart.totalCart)
    }
}


let cart =
new ShoppingCart(
101
)

cart.addProduct(
"Laptop",
50000
)

cart.addProduct(
"Mouse",
1000
)

cart.removeProduct(
"Mouse"
)

console.log(
cart.calculateTotal()
)

console.log(
cart.cartInfo
)

ShoppingCart.showTotalCart()
*/