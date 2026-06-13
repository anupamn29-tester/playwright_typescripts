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