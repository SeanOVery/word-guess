let timerEl = document.querySelector('.timer'),
    letterDisplayEl = document.querySelector('.letterDisplay'),
    winsDisplayEl = document.querySelector('.wins'),
    lossesDisplayEl = document.querySelector('.losses'),
    guessWord = 'markdown',
    guessWordArray = guessWord.split(''),
    winLossCount = {
        wins: 0,
        losses: 0
    };

function countdown() {
    addBlankSpaces();
    keydownCheck();
    let timeLeft = 10;
    let timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = `${timeLeft} second(s) remaining` 
        } else {
            timerEl.textContent = `Time's up`
            clearInterval(timeInterval);
            guessCheck();
            removeEls();
        }
    }, 1000)
}

function addBlankSpaces() {
    for (let i = 0; i < guessWord.length; i++) {
        let newP = document.createElement('p');
        letterDisplayEl.appendChild(newP);
        newP.textContent = ' _ ';
        newP.classList.add('temp')
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

function guessCheck() {
    let inputCheck = '';
    for (let i = 0; i < guessWord.length; i++) {
        inputCheck += letterDisplayEl.children[i].textContent
    }
    if (inputCheck === guessWord) {
        timerEl.textContent = `You win! The word was ${guessWord}`;
        removeEls();
        winLossCount.wins++;
        winsDisplayEl.textContent = `Wins: ${winLossCount.wins}`;
    } else {
        timerEl.textContent = `You lost. The word was ${guessWord}`;
        removeEls();
        winLossCount.losses++;
        lossesDisplayEl.textContent = `Losses: ${winLossCount.losses}`;
    }
}

function removeEls() {
    letterDisplayEl.innerHTML = '';
}



document.querySelector('.startButton').addEventListener('click', countdown);


