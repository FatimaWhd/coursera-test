let NumberToGuess = 20;
let score = 20;
let highestRecord = 0;

document.addEventListener('DOMContentLoaded', function (event) {
    NumberToGuess = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.messageclass').textContent = 'Guess the number!';
    document.querySelector('.scoreclass').textContent = 'Score: ' + score;
    document.querySelector('.numberclass').textContent = '?';
    document.querySelector('.highestrecordclass').textContent = 'Highest Record: ' + 0;

    console.log(NumberToGuess);
});

document.querySelector('.checkclass').addEventListener('click', function () {
    let userNumber = document.querySelector('.textboxclass').value;
    if(!isNaN(userNumber)){
        if (userNumber == NumberToGuess){
            document.querySelector('.messageclass').textContent = 'Congratulations! Correct Guess.';
            document.querySelector('.numberclass').textContent = NumberToGuess;

            if (score > highestRecord) 
                highestRecord = score;

            document.querySelector('.highestrecordclass').textContent = 'Highest Record: ' + highestRecord;

            document.querySelector('body').style.backgroundColor = '#E9967A';
            return;
        }
    
        else if (userNumber > NumberToGuess){
            document.querySelector('.messageclass').textContent = 'Your guess is large.';
            document.querySelector('.textboxclass').value = '';
            score--;
        }
        else {
            document.querySelector('.messageclass').textContent = 'Your guess is small.';
            document.querySelector('.textboxclass').value = '';
            score--;
        }
        if (score > 0)
            document.querySelector('.scoreclass').textContent = 'Score: ' + score;
        else{
            alert("Failed To Guess. Play Again.");
            document.querySelector('.textboxclass').value = '';
            return;
        }

    }
    else{
        alert("Wrong Input!");
        document.querySelector('.textboxclass').value = '';
    }
});

document.querySelector('.againclass').addEventListener('click', function () {
    score = 20;
    NumberToGuess = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.textboxclass').value = '';
    document.querySelector('.messageclass').textContent = 'Guess the number!';
    document.querySelector('.scoreclass').textContent = 'Score: ' + score;
    document.querySelector('.numberclass').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#5f9ea0';
    console.log(NumberToGuess);
  });
  