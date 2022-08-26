// CHOSEN NUMBERS SECTION---------------------------------------------
let chosenNumber = document.querySelectorAll(".number");
let arrayNumber = [];
let btnValidate = document.getElementById("btnValidate");


btnValidate.addEventListener("click", (e)=> {
    e.preventDefault();

    chosenNumber.forEach((chosenElement) => {
        arrayNumber.push(parseInt(chosenElement.value));
    });

    arrayNumber.forEach((itemArray) => {
    document.querySelector("#numberChosen").innerHTML += itemArray + " | ";
    })

    btnValidate.remove();
})


//FOR LOOP to generate 5 RANDOM NUMBERS----------------------
let resultLottery;
let arrayLottery = [];
let btnDraw = document.getElementById("randomLotteryNumbers");


// loops 5 times to create 5 random numbers -------------------
btnDraw.addEventListener("click",() => {

    for ( let i = 0; i < 5; i++) {
        resultLottery = Math.floor (Math.random() *50); 
        arrayLottery.push(resultLottery); //to push the random number into an array
    }

    arrayLottery.forEach((itemArrayL) => {
        document.getElementById("numberRandom").innerHTML += itemArrayL + " | ";
    })

    btnDraw.remove();

//-------------------------did you WIN or LOOSE?
    if (arrayLottery === arrayNumber) { 
        document.getElementById("message").innerHTML += "You WIN congratulations !";
    } else {
          document.getElementById("message").innerHTML += "You LOST sorry !";
    };

//---------------------How many right numbers did you get ?
    let score = 0;
 
    arrayLottery.forEach(element => {
    if (arrayNumber.includes(element)) {
        score++;
        }
    }); //end of arrayLottery

    document.getElementById("score").innerHTML += score;
    confetti();

}) //end of btnDraw click event


//-------------------------------------------------------------

