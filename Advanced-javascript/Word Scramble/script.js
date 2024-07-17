const words = ["apple", "banana", "orange", "strawberry", "grape", "kiwi", "pineapple", "watermelon", "mango", "blueberry"];
let scrambledWord;
let timer;

function startGame() {
    // Clear previous timer
    clearInterval(timer);

    // Get a random word
    const randomIndex = Math.floor(Math.random() * words.length);
    scrambledWord = scrambleWord(words[randomIndex]);
    document.getElementById('scrambled-word').textContent = scrambledWord;

    // Reset input and result
    document.getElementById('answer-input').value = '';
    document.getElementById('result').textContent = '';

    // Start the timer
    let timeLeft = 10;
    updateTimerDisplay(timeLeft);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById('result').textContent = "Time's up! Try again.";
        }
    }, 1000);
}

function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function updateTimerDisplay(timeLeft) {
    document.getElementById('time-left').textContent = timeLeft;
}

function checkAnswer() {
    const userInput = document.getElementById('answer-input').value.trim().toLowerCase();
    if (userInput === words.find(word => word === userInput)) {
        clearInterval(timer);
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Incorrect. Try again.";
    }
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

// Start the game initially
startGame();
