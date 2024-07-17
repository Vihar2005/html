// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke"
];

// Function to generate a random quote
function generateRandomQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];
    // Display the random quote
    document.getElementById('quote').textContent = randomQuote;
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', generateRandomQuote);

// Generate a random quote initially
generateRandomQuote();
