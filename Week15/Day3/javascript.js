function compareNumbers(userNumber,computerNumber) {
    for (i=2;i>0;i--) {
        if (userNumber===computerNumber) {
            alert("WINNER!");
            break;
        } else if (userNumber>computerNumber) {
            alert("Your number is bigger then the computer's, guess again!");
            do {
                input = prompt("Enter a number between 0 to 10.");
                userNumber = parseInt(input);
                if (Number.isNaN(userNumber)) {
                    alert("Sorry, Not a Number!");
                } else if (userNumber<0 || userNumber>10) {
                    alert("Sorry, it's not a good number!");
                } else {
                    alert("You chose " + userNumber + ". (Numbers are rounded to the nearest integer in order to play the game)")
                    break;
                }
            } while (Number.isNaN(userNumber)||userNumber<0||userNumber>10);
        } else if (userNumber<computerNumber) {
            alert("Your number is smaller then the computer's, guess again!");
            do {
                input = prompt("Enter a number between 0 to 10.");
                userNumber = parseInt(input);
                if (Number.isNaN(userNumber)) {
                    alert("Sorry, Not a Number!");
                } else if (userNumber<0 || userNumber>10) {
                    alert("Sorry, it's not a good number!");
                } else {
                    alert("You chose " + userNumber + ". (Numbers are rounded to the nearest integer in order to play the game)")
                    break;
                }
            } while (Number.isNaN(userNumber)||userNumber<0||userNumber>10);
        }
    }
    if (i===0) {
        alert("Out of chances! Too bad!");
    } else {
        alert("Well done!");
    } 
}

function playTheGame() {
    if (confirm("Do you want to play the game?")) {
        alert("Okay,let's play!");
        do {
            input = prompt("Enter a number between 0 to 10.");
            userNumber = parseInt(input);
            if (Number.isNaN(userNumber)) {
                alert("Sorry, Not a Number!");
            } else if (userNumber<0 || userNumber>10) {
                alert("Sorry, it's not a good number!");
            } else {
                alert("You chose " + userNumber + ". (Numbers are rounded to the nearest integer in order to play the game)")
                continue;
            }
        } while (Number.isNaN(userNumber)||userNumber<0||userNumber>10);
        computerNumber=parseInt(Math.random()*11);
        compareNumbers(userNumber,computerNumber);
    } else {
        alert("No problem, goodbye!");
    }
}