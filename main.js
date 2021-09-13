let timerEl = document.querySelector('.timer'),
    letterDisplayEl = document.querySelector('.letterDisplay'),
    guessWord = 'markdown',
    guessWordArray = guessWord.split('');
    winLossCount = {
        wins: 0,
        losses: 0
    };

function countdown() {
    addBlankSpaces();
    let timeLeft = 60;
    let timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = `${timeLeft} second(s) remaining` 
        } else {
            timerEl.textContent = `Time's up`
            clearInterval(timeInterval);
        }
    }, 1000)
}

function addBlankSpaces() {
    for (let i = 0; i < guessWord.length; i++) {
        let newP = document.createElement('p');
        letterDisplayEl.appendChild(newP);
        newP.textContent = ' _ ';
        newP.setAttribute('data-index', i)
    }
}
function keydownCheck() {
    document.addEventListener('keydown', function(event) {
        for (let i = 0; i < guessWord.length; i++) {
            let elIndex = letterDisplayEl.children[i].getAttribute('data-index'); 
            if (event.key === guessWordArray[i]) {
                letterDisplayEl.children[elIndex].textContent = event.key;
            }
        }
    })
}



document.querySelector('.startButton').addEventListener('click', countdown);
document.querySelector('.startButton').addEventListener('click', keydownCheck);