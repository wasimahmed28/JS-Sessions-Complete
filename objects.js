const myObj = {name: "Pratyusha"}

const anotherObj = {
    living : true,
    answer : 32,
    hobbies: ["Basketball", "eating", "Sleeping"],
    bevarages:{
        morning : "Coffee",
        afternoon : "Iced Tea"
    },
    action:function(){
        return `Time for ${this.bevarages.afternoon}`
    }
}

console.log(anotherObj.hobbies[1])
console.log(anotherObj.action())

