/*
let apicall=new Promise((resolve,reject)=>{
    //resolve({status:200,body:"Ok"})
    reject("500 Error")
})
apicall
    .then((response)=>{
        console.log(response)
        console.log(response.status)
    })
    .catch((NoResponse)=>{
        console.log(NoResponse)
    })
    .finally(()=>{                          //Final is not mandatory 
        console.log("Process Complete")
    })
*/
/*
let food=new Promise((resolve,reject)=>{
    let order=false
    if(order){
        resolve("Oreder delivery Successfully")
    }
    else{
        reject("Not Delivered")
    }
})

food
    .then((Success)=>{
        console.log(Success)
    })
    .catch((Not_Done)=>{
        console.log(Not_Done)
    })
    .finally(()=>{
        console.log("Process Done")
    })
*/
/*
//If all are resolve ststus
let ChekDB=new Promise((resolve,reject)=>{
    resolve("Auth is Ok")
})
let CheckCatch=new Promise((resolve,reject)=>{
    resolve("Coockis is ok")
})
let checkConnection=new Promise((resolve,reject)=>{
    resolve("Conncetion is ok")
})

Promise.all([ChekDB,CheckCatch,checkConnection])
.then((successfully_doneall)=>{
    console.log(successfully_doneall)
})
*/
/*
//If one Promise reject then all Promise faild
let ChekDB=new Promise((resolve,reject)=>{
    resolve("Auth is Ok")
})
let CheckCatch=new Promise((resolve,reject)=>{
    //resolve("Coockis is ok")
    reject("Coockies Generated")
})
let checkConnection=new Promise((resolve,reject)=>{
    resolve("Conncetion is ok")
})

Promise.all([ChekDB,CheckCatch,checkConnection])
.then((successfully_doneall)=>{
    console.log(successfully_doneall)
})
.catch((error_massage)=>{
    console.log(error_massage)
})
*/
/*
let testing=new Promise((resolve,reject)=>{
    resolve("1stTest is Pass")
})
let test2=new Promise((resolve,reject)=>{
    reject("2nd Test is Faild")
})
let test3=new Promise((resolve,reject)=>{
    reject("3rd Test is Failed")
})
Promise.allSettled([testing,test2,test3])
.then((display)=>{
    console.log(display)
})
.catch((error_mas)=>{           //catch is not require
    console.log(error_mas)
})
*/
/*
let card=new Promise((resolve,reject)=>{
    let payment=false
    if(payment){
        resolve("Payment Sucessfully")
    }
    else{
        reject("Payment Not Done")
    }
})
card
.then((succ)=>{
    console.log(succ)
})
.catch((faild)=>{
    console.log(faild)
})
*/
/*
let card=new Promise((resolve,reject)=>{
    //let payment=false
   // if(payment){
        resolve("Payment Sucessfully")
    //}
    //else{
        //reject("Payment Not Done")
    //}
})
let purches=new Promise((resolve,reject)=>{
    //resolve("Item purches successfully")
    reject("Item purches not done")
})
let delivery_item=new Promise((resolve,reject)=>{
    resolve("Item Deleveriyed")
    //reject("Item Not Delevery")
})

Promise.all([card,purches,delivery_item])
.then((Done)=>{
    console.log(Done)
})
.catch((Error)=>{
    console.log(Error)
})
*/

//Asynchronous Function
/*
function login(username,password){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if(username=="admin" && password=="1234"){
            resolve("Login Successfully")
        }
            else{
            reject("Login Failed")
        }
        }, 5000);
    })
}
login("admin","234")
.then((success)=>{
    console.log(success)
})
.catch((error)=>{
    console.log(error)
})  
.finally(()=>{
    console.log("Closing Browser")
})
*/

function fatch_user(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let inp=false
            if(inp){
                let user={name:'Anupam',age:25}
                resolve(user)
            }
            else{
                reject("Error Display")
            }
        }, 1000)
    })
}
fatch_user()
.then((succ_fatch)=>{
    console.log(succ_fatch.name)
})
.catch((Not_get)=>{
    console.log(Not_get)
})
.finally(()=>{
    console.log("Data get successfully")
})