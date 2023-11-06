// let a=document.getElementById("view1")
// console.log(a)

// let b=document.getElementsByClassName("view2")
// console.log(b)

// let c=document.querySelector(".three")
// console.log(c)

// let d=document.querySelectorAll(".three")
// console.log(d)

// let view1=document.querySelector("#view1")
// console.log(view1)

// let view2=document.querySelector("#view2")
// console.log(view2)


// view1.style.display = "none"
// view2.style.display = "flex"



// h1=document.querySelector("h1")

// h1.style.fontSize = "100px"
// h1.style.color ="grey"






// let a=document.getElementById("view1")
// console.log(a)

// let b=document.getElementsByClassName("view2")
// console.log(b)

// let c=document.getElementsByClassName("view")
// console.log(c)

// let d=document.querySelector("#view1")
// console.log(d)

// let d=document.querySelectorAll(".view")
// console.log(d)

// const view1 = document.querySelector("#view1")
// const view2 = document.querySelector("#view2")

// view1.style.display="none";
// view2.style.display="flex";

// const h1= document.querySelector("h1")
// h1.style.fontSize = "50px"
// h1.style.color = "pink"
// h1.style.border ="5px solid pink"
// h1.style.padding = "20px"
// h1.style.top = "200px"
// h1.style.position = "relative"

// view1.style.display = "none";
// view2.style.display = "block";
// const h2 = document.querySelector("h2");
// h2.style.fontSize = "100px"
// h2.style.fontStyle= "Italic"
// h2.style.color = "red"
// h2.style.border = "15px solid #000"
// h2.style.borderRadius = "20px"
// h2.style.margin = "20px"
// h2.style.padding = "20px"

const odd = document.querySelectorAll("div:nth-of-type(odd)")
console.log(odd)

for(let i=0;i<odd.length;i++){
    odd[i].style.fontSize = "75px"
    odd[i].style.color="pink"
    odd[i].style.border = "10px solid pink"
    // odd[i].style.position="absolute"
    odd[i].style.top="250px"
    odd[i].style.padding="20px"
    odd[i].style.margin="30px"
    odd[i].style.left="200px"
}