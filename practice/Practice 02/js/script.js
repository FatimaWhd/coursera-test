let scorecomputer = 0;
let scoreplayer = 0;

const computer_Score = document.querySelector('.computerscore')
const player_Score = document.querySelector('.playerscore')

const op1 = document.querySelector('.rockclass');
const op2 = document.querySelector('.paperclass');
const op3 = document.querySelector('.scissorclass');


const randomOptions = ["Rock", "Paper", "Scissor"];

//---------------------------------------------------------ROCK----------------------------------------------------
op1.addEventListener("click", function () {
    const playerOption = this.textContent;
    console.log(playerOption);

    let computerOption = randomOptions[Math.floor(Math.random() * 3)];
    console.log(computerOption);

    document.querySelector('.section-content-1').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-1').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-1').classList.remove("fa-hand-scissors");
    document.querySelector('.section-content-2').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-2').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-2').classList.remove("fa-hand-scissors");

    document.querySelector('.section-content-1').className += " fa-hand-rock";

    if (computerOption === "Rock"){
        document.querySelector('.section-content-2').className += " fa-hand-rock";
    }

    else if (computerOption === "Paper"){
        document.querySelector('.section-content-2').className += " fa-hand-paper";
    }

    else {
        document.querySelector('.section-content-2').className += " fa-hand-scissors";
    }

    if (playerOption === computerOption){
        const msg = document.querySelector('.message');
        msg.innerHTML = "It's a tie.";
        msg.style.color = 'DarkSalmon';
    }

    if (computerOption === "Scissors") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Win.";
        msg.style.color = 'Green';

        document.querySelector('.playerscore').textContent = ++scoreplayer;

    } else if (computerOption === "Paper") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Lose.";
        msg.style.color = 'black';

        document.querySelector('.computerscore').textContent = ++scorecomputer;
    }

});


//-----------------------------------------------------------PAPER--------------------------------------------------
op2.addEventListener("click", function () {
    const playerOption = this.textContent;
    console.log(playerOption);

    let computerOption = randomOptions[Math.floor(Math.random() * 3)];
    console.log(computerOption);

    document.querySelector('.section-content-1').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-1').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-1').classList.remove("fa-hand-scissors");
    document.querySelector('.section-content-2').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-2').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-2').classList.remove("fa-hand-scissors");
    
    document.querySelector('.section-content-1').className += " fa-hand-paper";

    if (computerOption === "Rock"){
        document.querySelector('.section-content-2').className += " fa-hand-rock";
    }

    else if (computerOption === "Paper"){
        document.querySelector('.section-content-2').className += " fa-hand-paper";
    }

    else {
        document.querySelector('.section-content-2').className += " fa-hand-scissors";
    }

    if (playerOption === computerOption){
        const msg = document.querySelector('.message');
        msg.innerHTML = "It's a tie.";
        msg.style.color = 'DarkSalmon';
    }

    if (computerOption === "Rock") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Win.";
        msg.style.color = 'Green';

        document.querySelector('.playerscore').textContent = ++scoreplayer;

    } else if (computerOption === "Scissor") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Lose.";
        msg.style.color = 'black';

        document.querySelector('.computerscore').textContent = ++scorecomputer;
    }

});

//--------------------------------------------------------SCISSORS---------------------------------------------------
op3.addEventListener("click", function () {
    const playerOption = this.textContent;
    console.log(playerOption);

    let computerOption = randomOptions[Math.floor(Math.random() * 3)];
    console.log(computerOption);

    document.querySelector('.section-content-1').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-1').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-1').classList.remove("fa-hand-scissors");
    document.querySelector('.section-content-2').classList.remove("fa-hand-rock");
    document.querySelector('.section-content-2').classList.remove("fa-hand-paper");
    document.querySelector('.section-content-2').classList.remove("fa-hand-scissors");

    document.querySelector('.section-content-1').className += " fa-hand-scissors";

    if (computerOption === "Rock"){
        document.querySelector('.section-content-2').className += " fa-hand-rock";
    }

    else if (computerOption === "Paper"){
        document.querySelector('.section-content-2').className += " fa-hand-paper";
    }

    else {
        document.querySelector('.section-content-2').className += " fa-hand-scissors";
    }

    if (playerOption === computerOption){
        const msg = document.querySelector('.message');
        msg.innerHTML = "It's a tie.";
        msg.style.color = 'DarkSalmon';
    }

    if (computerOption === "Paper") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Win.";
        msg.style.color = 'Green';

        document.querySelector('.playerscore').textContent = ++scoreplayer;

    } else if (computerOption === "Rock") {
        const msg = document.querySelector('.message');
        msg.innerHTML = "You Lose.";
        msg.style.color = 'black';

        document.querySelector('.computerscore').textContent = ++scorecomputer;
    }

});


const againbtn = document.querySelector('.againclass');
againbtn.addEventListener("click", function () {
    location.reload(true);
});










