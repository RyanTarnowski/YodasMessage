const greeting = [
    "Greetings", 
    "Welcome", 
    "Happy to see you I am", 
    "A message for you I have"
];

const person = [
    "Padawan",
    "Apprentice",
    "Master Jedi",
    "Dark One",
];

const quote = [
    "Do or do not, there is no try",
    "Unlearn what you have learned",
    "Pass on what you have learned",
    "The fear of loss is a path to the dark side",
    "The greatest teacher, failure is",
    "Named must your fear be, before banish it you can",
    "Your path you must decide",
    "Fear is the path to the dark side",
    "Fear leads to anger",
    "Anger leads to hate",
    "Hate leads to suffering",
    "Remember, a Jedi's strength flows from the Force",
];

const randGreeting = greeting[Math.floor(Math.random() * greeting.length)];
const randPerson = person[Math.floor(Math.random() * person.length)];
const randQuote = quote[Math.floor(Math.random() * quote.length)];

console.log(`${randGreeting}, ${randPerson}. ${randQuote}.`);