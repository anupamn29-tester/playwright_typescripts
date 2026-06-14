/*
class Vehicle{
    brand:string

    constructor(brand:string){
        this.brand=brand
    }
    showBrand(){
        console.log(`Brand Name is:${this.brand}`)
    }
}

class Car extends Vehicle{
    model:string

    constructor(brand:string,model:string){
        super(brand)
        this.model=model
    }

    showModel(){
        this.showBrand()
        console.log(`Model Name is:${this.model}`)
    }
}
let honda:Car=new Car('Honda','BMW')
honda.showModel()
*/

class Payment{
    pay_method:string
    constructor(pay_method:string){
        this.pay_method=pay_method
    }
    pay(){
        console.log(`Pay Using: ${this.pay_method}`)
    }
}

class UPI extends Payment{

    constructor(pay_method:string){
        super(pay_method)
    }
    
    override pay(){
        console.log("Pay Using: UPI")
    }
}
class Card extends Payment{

    constructor(pay_method:string){
        super(pay_method)
    }
    
    override pay(){
        console.log("Pay Using: Card")
    }
}

let Upay:UPI=new UPI("UPI")
let Cpay:Card=new Card("Card")
Upay.pay()
Cpay.pay()

