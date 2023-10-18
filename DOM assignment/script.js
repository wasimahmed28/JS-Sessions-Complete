const btn1 = document.querySelector("#but1")
const btn2 = document.querySelector("#but2")
const btn3 = document.querySelector("#but3")

const divOne = document.querySelector(".one")
const divTwo = document.querySelector(".two")
const divThree = document.querySelector(".three")

const but = document.querySelector(".but")

btn1.addEventListener("mouseover",function(){
    divOne.style.display = "block"
    divTwo.style.display = "none"
    divThree.style.display = "none"
    divOne.style.backgroundColor = "white"
    but.style.backgroundColor = "white"
})

btn2.addEventListener("mouseover",function(){
    divOne.style.display = "none"
    divTwo.style.display = "block"
    divThree.style.display = "none"
    divTwo.style.backgroundColor = "white"
    but.style.backgroundColor = "white"
})

btn3.addEventListener("mouseover",function(){
    divOne.style.display = "none"
    divTwo.style.display = "none"
    divThree.style.display = "block"
    divThree.style.backgroundColor = "white"
    but.style.backgroundColor = "white"
})

btn1.addEventListener("dblclick",function(){
    divOne.style.display = "block"
    divTwo.style.display = "none"
    divThree.style.display = "none"
    divOne.style.backgroundColor = "black"
    but.style.backgroundColor = "black"

})

btn2.addEventListener("dblclick",function(){
    divOne.style.display = "none"
    divTwo.style.display = "block"
    divThree.style.display = "none"
    divTwo.style.backgroundColor = "black"
    but.style.backgroundColor = "black"
})

btn3.addEventListener("dblclick",function(){
    divOne.style.display = "none"
    divTwo.style.display = "none"
    divThree.style.display = "block"
    divThree.style.backgroundColor = "black"
    but.style.backgroundColor = "black"
})