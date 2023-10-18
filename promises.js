// CallBacks, Promises, Thenabales, Async/Await

// const { response } = require("express")

//Callbacks


// console.log("animal")
// console.log("bird")

// function firstFunction(parameters, CallBack){
//     CallBack()
// }

// firstFunction(para, function(){
//     secondFunction(para, function(){
//         thirdFunction(para, function(){

//         })
//     })
// })

// console.log("dinosaurs")
// console.log("humans")

// for(let i=1;i<10;i++){
//     for(let j=1;j<10;j++){
//         console.log(j)
//     }
// }
// const newPromise = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         resolve("newPromise has been resolved")
//     },3000)
    
// })

// const myPromise = new Promise((resolve, reject)=>{
//     const error= false;
//     // console.log(error)
//     if(!error){
//         resolve("Yes! Promise has been resolved")
//     }
//     else{
//         reject("No! Promise has been rejected")
//     }
// })

// console.log(myPromise)
// myPromise()




// newPromise.then(value=>{
//     console.log(value)
// })


// myPromise.then(value =>{
//     console.log(value)
// })
// .then(newValue=>{
//     console.log(newValue)
// })
// .catch(err=>{
//     console.warn(err)
// })


// const users = fetch("https://jsonplaceholder.typicode.com/users")
// console.log(users)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     return response.json();
// })

// .then(data=>{
//     data.forEach(user=>{
//         console.log(user)
//     })
    
// })
// console.log(user)


// const myObj = {
//     userList:[]
// }
// console.log(myObj.userList)
// const myFunction = async () =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json();
//     // console.log(jsonUserData);
//     return jsonUserData;
// }
// const anotherFunction = async () =>{
//     const data = await myFunction();
//     myObj.userList =data;
//     // console.log(data)
// }
// anotherFunction()
// console.log(myObj.userList)






























// Async/await Assignment-1
//This getUserEmails fetches user emails and we are console.logging that in our postToWebPage function. Your task is to use that function but display it on the web, when, say a button is clicked.
// const getUserEmails = async () =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const jsonUserData = await response.json();

//     const userEmail = jsonUserData.map(user=>{
//         return user.email;
//     })
//     postToWebPage(userEmail)
// }
// const postToWebPage = (data) =>{
//     console.log(data)
// }

// getUserEmails()

























//Async/await Assignment-2
//This getJoke function fetches jokes and we are console.logging that in our postToWebPage function. Your task is to use that function but display it on the web, when, say a button is clicked.

const getJoke = async () =>{

    const response = await fetch ("https://icanhazdadjoke.com/",{
        method:"GET",
        headers: {
            Accept: "application/json"
            // Accept: "text/plain"
        }
    });
    const jsonJokeData = await response.json();
    // const jsonJokeData = await response.text();
    // console.log(jsonJokeData.joke)
    // postToWebPage(jsonJokeData.joke)
    postToWebPage(jsonJokeData)
}
const postToWebPage = (data) =>{
    console.log(data)
}

getJoke()

const jokeObject = {
    id: 'IRKJBQ7p4wc',
     joke: ' I never wanted to believe that my Dad was stealin…ut when I got home, all the signs were there.\r\n\r\n'
    }
const postData = async (jokeObj) =>{
    const response = await fetch ("https://httpbin.org/post", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    
}
postData(jokeObject)


// const requestJoke = async(firstName,lastName)=>{

//     const response = await fetch (`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.value);
// }
// requestJoke("Clint","Eastwood")
