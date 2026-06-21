/*
function fun_promises(){
    console.log("User Data Fatch...")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let response=true
            if(response){
                resolve({name:'Anupam',age:30})
            }
            else{
                reject("Error fatch user")
            }
        }, 3000);
    })
}
//Anonymous Asynchrous Function
/*
async function get_user() {
    try{
    let user1=await fun_promises()
    console.log(user1)
    }
    catch(error_mag){
        console.log(error_mag)
    }
}
get_user()


//Arrow Asynchrous Function
let get_user=async()=>{
    try{
    let user1=await fun_promises()
    console.log(user1)
    }
    catch(error_mag){
        console.log(error_mag)
    }
}
get_user()
*/
/*
function sequence(order){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ item: order, status: 'Status:200 OK' })
        }, 3000);
    })
}
async function revier() {

    let start_time=Date.now()

    let create = await sequence("Pizza order successfully")
    console.log(`${create.item},${create.status}`)
    let update=await sequence("Order update successfully")
    console.log(`${update.item},${update.status}`)
    let delevery=await sequence("Order deliveried successfully")
    console.log(`${delevery.item},${delevery.status}`)

    let end_time=Date.now()
    console.log(`Total Time,${(end_time-start_time)}ms`)
}
revier()
*/
/*
//Promise All
function api_response(api){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({item:api,status:"Response Successfully"})
        }, 3000);
        
    })
}
async function api_call() {
    let start_time=Date.now()
    let [api1,api2,api3]=await Promise.all([
            api_response("Get"),
            api_response("Update"),
            api_response("Delete")
    ])
    console.log(`${api1.item} ${api1.status}`)
    console.log(`${api2.item} ${api2.status}`)
    console.log(`${api3.item} ${api3.status}`)
    let end_time=Date.now()
    console.log(`Time Taken: ${end_time-start_time}ms`)

}
api_call()
*/

function login(user_name,password){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(user_name==="admin"&& password==="admin123"){
                resolve("Login sccessfully")
            }
            else{
                reject("Credential Not Match")
            }
        }, 1000);
    })
}
function dashboard(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Dashboard Open Sucessfully")
        }, 2000);   
    })
}
// function click_ele(){
function click_ele(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Element clicked successfully")
        }, 500);
    })
}

async function startApp(){
    try{
        let loginRes = await login("admin123","admin123")
        console.log(loginRes)
        let dashRes = await dashboard()
        console.log(dashRes)
        let clickRes = await click_ele()
        console.log(clickRes)
    }
    catch(error_mag){
        console.log(error_mag)
    }
}
// Start the sequential flow
startApp()