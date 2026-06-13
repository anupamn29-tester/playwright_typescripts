//Constructor Overloading
/*
class eventcreation{
    envName:string
    browser:string
    baseUrl?:string

    constructor(envName:string)
    constructor(envName:string,browser:string)
    constructor(envName:string,browser:string,baseUrl?:string)

    constructor(eve_name:string,browser?:string,url?:string){
        this.envName=eve_name
        this.browser=browser || "chrome"
        this.baseUrl=url
    }
    display_data():void{
        console.log(this.envName)
        console.log(this.browser)
        if(this.baseUrl){
            console.log("The Url is",this.baseUrl)
        }
        else{
            console.log("No URL configured")
        }
    }
}
const tc1=new eventcreation("Anupa")
tc1.display_data()
*/
//Method Overloading
/*
class method_overload{
    executeTest(testName: string):void
    executeTest(testName: string, browser: string):void
    executeTest(testName: string, browser: string, iterations: number):void

    executeTest(testName: string, browser?: string, iterations?: number):void{
        console.log(testName)
        if(typeof browser==='string'){
            console.log(browser)
        }
        else{
            console.log('Chrome')
        }
        if(typeof iterations==="number"){
            console.log(iterations)
        }
        else{
            console.log("Default iterations → 1")
        }
    }

}
let call1=new method_overload();
call1.executeTest("anu")
call1.executeTest("rup","google.com")
call1.executeTest("rat","yehaoo.com",9)
*/
//Method Overloading
/*
class Calculator{
    
    add(a:number,b:number):number
    add(a:number,b:number,c?:number):number
    
    add(a:number,b:number,c?:number):number{
        if(typeof c==='number'){
            return a+b+c
        }
        else{
            return a+b
        }
    }
}
let num=new Calculator
console.log(num.add(1,2))
console.log(num.add(1,2,3))
*/

//Constructor Overloading
class Employee{
    name:string
    age?:number

    constructor(name:string)
    constructor(name:string,age?:number)
    constructor(name:string,age?:number){
        this.name=name
        this.age=age
    }
    
    emp():void{
        console.log(this.name)
        if(this.age){
            console.log(this.age)
        }
    }
}
const emp1=new Employee("Anupam")
emp1.emp()
const emp2=new Employee("anupam",26)
emp2.emp()