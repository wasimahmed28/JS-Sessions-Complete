// const computer=Math.floor(Math.random()*3)
// console.log(computer)
// const myArray = ['rock', 'paper','scissors']
// const computerArr = myArray[computer]
// console.log(computerArr)

// const getUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmails = jsonUserData.map(user => user.email);
//     return userEmails;
// }

// const postToWebPage = async () => {
//     const emailList = document.getElementById("emailList");
//     const userEmails = await getUserEmails();

//     emailList.innerHTML = ""; // Clear the list

//     userEmails.forEach(email => {
//         const listItem = document.createElement("li");
//         listItem.textContent = email;
//         emailList.appendChild(listItem);
//     });
// }

// const fetchButton = document.getElementById("fetchButton");
// fetchButton.addEventListener("click", postToWebPage);


const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    return jsonJokeData.joke;
}

const postToWebPage = async () => {
    const jokeContainer = document.getElementById("jokeContainer");
    const joke = await getJoke();
    jokeContainer.textContent = joke;
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", postToWebPage);