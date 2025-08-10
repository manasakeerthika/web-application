document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    // A simple array of quotes
    const quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            quote: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        }
    ];

    // Function to display a random quote
    const displayRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote.quote;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
    };

    // Function to copy the quote to the clipboard
    const copyQuote = () => {
        const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
        navigator.clipboard.writeText(fullQuote).then(() => {
            alert('Quote copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // Event listeners for the buttons
    generateBtn.addEventListener('click', displayRandomQuote);
    copyBtn.addEventListener('click', copyQuote);

    // Display a quote on initial page load
    displayRandomQuote();
});