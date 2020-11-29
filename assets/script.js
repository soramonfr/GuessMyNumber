let greet = document.querySelector("h1");
function askName() {
    let name = prompt("Hi, nice to meet you! What is your name?");
    greet.innerHTML = `Hello ${name}, welcome! Let's have some fun!`
}
askName();

let buttonPlay = document.querySelector("button");
function guessGame() {
    let numberPick = Math.floor(Math.random() * 101);
    let guess = Number(prompt("Guess my number, it is between 0 and 100"));
    let trials = 0;
    while (guess !== numberPick && trials < 11) {
        if (guess < numberPick) {
            alert("🙇‍♀️ Your guess is too small");
        }
        else if (guess > numberPick) {
            alert("🙆‍♀️ Your guess is too big");
        } else {
            alert("🧟‍♀️ Please write numbers");
        }
        trials++;
        guess = Number(prompt("Guess my number, it is between 0 and 100"));
    }

    if (guess === numberPick) {
        alert("Congratulations, I'll send you a cool cat picture 😸!");
        let address = prompt("What is your email?");
        alert("Thank you, the picture is sent 📧")
    } else {
        alert("Try again 😎!")
    }
}
buttonPlay.addEventListener("click", guessGame)