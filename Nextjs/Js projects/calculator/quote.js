const btn = document.getElementById("button");
const output = document.querySelector(".output");

let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It is never too late to be what you might have been. - George Eliot",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The future belongs to those who prepare for it today. - Malcolm X",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Life is what happens when you're busy making other plans. - John Lennon"
];

btn.addEventListener("click", () => {
    console.log("clicked");
    let random = Math.floor(Math.random()*quotes.length);
    output.textContent = quotes[random];
})
