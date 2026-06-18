/*
interface Payment{
    pay(amount:number):void;
}
class UPI implements Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using UPI`)
    }
}
class Card implements Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using Card`)
    }
}
let u =
new UPI()

u.pay(
500
)

let c =
new Card()

c.pay(
1000
)
*/

interface EmpWorker{
    work():void
}
interface Coder{
    code():void
}

class Developer implements EmpWorker,Coder{
    work(): void {
        console.log(`Working...`)
    }
    code(): void {
        console.log(`Coding...`)
    }
}

let dev =
new Developer()

dev.work()

dev.code()