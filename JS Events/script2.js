const view =document.querySelector("#view2")
const div =document.querySelector("div")
const h2=document.querySelector("h2")
const h1 =document.querySelector("h1")

// document.addEventListener("event",function)

const startApp = () => {
    view.addEventListener("click", (e)=>{
        view.classList.toggle("yellow")
        view.classList.toggle("darkblue")
    })
    div.addEventListener("click", (e)=>{
        div.classList.toggle("sowmiya")
        div.classList.toggle("black")
    })
    h2.addEventListener("mouseover", (e) =>{
        e.target.textContent ="JS is used to manipulate the Browser"
    })
    h2.addEventListener("mouseout", (e) =>{
        e.target.textContent ="This is pretty much it for events in JS"
    })
}
startApp()

// const h1 =document.querySelector("h1")
// h1.addEventListener("mouseover", (e) =>{
//     e.target.textContent ="JS is used to manipulate the Browser"
// })
// h1.addEventListener("mouseout", (e) =>{
//     e.target.textContent ="This is pretty much it for events in JS"
// })