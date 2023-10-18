// let a = "smriti"
// console.log(a.slice(0,3))
// let num1=15
// let num2=15
// console.log(num1*num2*num1*num2)

// let num3=15
// let num4=13
// console.log(num3*num4*num3*num4)
// function sum(num1,num2){
//     return num1*num2*num1*num2;
// }

// console.log(sum(15,15))
// console.log(sum(4,3))
// console.log(sum(5,3))
// console.log(sum(12,3))
// console.log(sum(3,3))
// console.log(sum(55,3))
// console.log(sum(78,3))
// console.log(sum(2,455))
// console.log(sum(2,66))
// console.log(sum(2,323))
// console.log(num2)

// function emailName(num1){
//     return num1.slice(0,num1.indexOf("."))
// }
// console.log(emailName("support@intellipaat.com"))
// console.log(emailName("smriti@intellipaat.com"))
// console.log(emailName("sowmiya@rediff.in"))
// console.log(emailName("brahma@gmail.com"))

function properCase(name){
    return name.charAt(0).toUpperCase() +name.slice(1).toLowerCase()
}
console.log(properCase("bRaHmA"))
console.log(properCase("WaHeeD"))
console.log(properCase("SoWMiYa"))
console.log(properCase("sMRiTi"))
console.log(properCase("vIvEk"))


// 2 words joined together without a space where the first word is in lowercase and the first letter of the second word is in uppercase
// Assignment 2: use the properCase function to achieve camelCasing
function camelCase(){
    properCase("inTeLLipaat")
}
console.log(camelCase("wAhEEd inTeLLipaat"))

waheedIntellipaat


