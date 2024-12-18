// Word list and elements
let wordCloud = [
    "Hello", "Hi", "How", "What", "You", "Yourself", "Name", "Victory", "Food", "Lovely",
    "Beautiful", "Written", "Where", "Who", "Awesome", "Dream", "Hope", "Courage", "Smile",
    "Time", "Journey", "Kindness", "Wisdom", "Strength", "Focus", "Vision", "Happiness", "Inspire",


];


let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let quoteContainerEl = document.getElementById("quoteContainer");

let errorMsg = "Please enter a valid word.";

// Word-to-quote mapping (100 quotes)
const wordToQuoteMap = {
    "Hello": "A simple hello can change someone's day.",
    "Hi": "Hi there! A small greeting can create big connections.",
    "How": "How we do things makes all the difference.",
    "What": "What we choose to focus on defines our future.",
    "You": "You are stronger than you think.",
    "Yourself": "Be yourself; everyone else is already taken.",
    "Name": "A person's name is to that person the sweetest sound.",
    "Victory": "Victory belongs to the most persevering.",
    "Food": "Food is not just fuel, it's information.",
    "Lovely": "A lovely heart is a beautiful thing.",
    "Beautiful": "Beautiful things don’t ask for attention.",
    "Written": "What’s written is more powerful than what’s said.",
    "Where": "Wherever you go, go with all your heart.",
    "Who": "Who you are is what makes you unique.",
    "Awesome": "Stay awesome, stay authentic.",
    "Dream": "Dream big, and dare to fail.",
    "Hope": "Hope is the anchor of the soul.",
    "Courage": "Courage is grace under pressure.",
    "Smile": "A smile is the universal welcome.",
    "Time": "Time is the most valuable thing you can spend.",
    "Journey": "Life is a journey, not a destination.",
    "Kindness": "Kindness is free; sprinkle it everywhere.",
    "Wisdom": "Wisdom begins in wonder.",
    "Strength": "Strength doesn’t come from what you can do, but from overcoming challenges.",
    "Focus": "Focus is the secret to success.",
    "Vision": "Vision without action is just a dream.",
    "Happiness": "Happiness is a choice, not a result.",
    "Inspire": "Inspire others by being unapologetically you.",
    "Peace": "Peace begins with a smile.",
    "Love": "Love is the bridge between you and everything.",
    "Honor": "Honor yourself by staying true to your values.",
    "Gratitude": "Gratitude turns what we have into enough.",
    "Friendship": "Friendship is the golden thread that ties hearts together.",
    "Freedom": "Freedom is the oxygen of the soul.",
    "Growth": "Growth is the only evidence of life.",
    "Empathy": "Empathy is seeing the world through another's eyes.",
    "Trust": "Trust takes years to build, seconds to break, and forever to repair.",
    "Success": "Success is not final; failure is not fatal.",
    "Respect": "Respect is earned, not demanded.",
    "Unity": "Unity is strength; division is weakness.",
    "Change": "Change is the heartbeat of growth.",
    "Power": "With great power comes great responsibility.",
    "Faith": "Faith is taking the first step even when you can’t see the whole staircase.",
    "Patience": "Patience is bitter, but its fruit is sweet.",
    "Humility": "Humility is the true key to success.",
    "Creativity": "Creativity is intelligence having fun.",
    "Integrity": "Integrity is doing the right thing when no one is watching.",
    "Passion": "Passion is energy. Feel the power that comes from focusing on what excites you.",
    "Resilience": "Resilience is the ability to bounce back after adversity.",
    "Confidence": "Confidence is silent. Insecurities are loud.",
    "Balance": "Balance is not something you find, it’s something you create.",
    "Motivation": "Motivation is what gets you started. Habit is what keeps you going.",
    "Optimism": "Optimism is the faith that leads to achievement.",
    "Dreamer": "A dreamer is one who can find their way by moonlight.",
    "Leader": "A leader is one who knows the way, shows the way, and goes the way.",
    "Loyalty": "Loyalty is the foundation of any lasting relationship.",
    "Action": "Action is the foundational key to all success.",
    "Mindset": "Your mindset determines your success.",
    "Joy": "Joy is a net of love by which you can catch souls.",
    "Determination": "Determination is the wake-up call to the human will.",
    "Ambition": "Ambition is the path to success; persistence is the vehicle you arrive in.",
    "Challenge": "Challenges are what make life interesting.",
    "Adventure": "Adventure is worthwhile in itself.",
    "Fearless": "To be fearless is to be unstoppable.",
    "Spirit": "Keep your spirit light, your mind clear, and your heart open.",
    "Believe": "Believe you can, and you’re halfway there.",
    "Clarity": "Clarity comes with action, not thought.",
    "Purpose": "Purpose fuels passion.",
    "Connection": "Connection is why we’re here; it gives purpose and meaning to our lives.",
    "Discovery": "Discovery consists of seeing what everyone else has seen but thinking what no one else has thought.",
    "Transformation": "Transformation happens one small step at a time.",
    "Energy": "Energy flows where attention goes.",
    "Wonder": "Wonder is the beginning of wisdom.",
    "Dedication": "Dedication is the key to success.",
    "Potential": "Your potential is endless."
};

// Function to display the quote (case-insensitive match)
function displayQuote(word) {
    const lowerCaseWord = word.toLowerCase(); // Convert input to lowercase
    const matchedWord = Object.keys(wordToQuoteMap).find(w => w.toLowerCase() === lowerCaseWord);

    const quote = matchedWord ? wordToQuoteMap[matchedWord] : "Not every word has a quote, but every word has potential!";
    quoteContainerEl.textContent = `"${quote}"`;
}

// Function to add a word to the Word Cloud
function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value.trim();
    if (userEnteredWord) {
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord);
        displayQuote(userEnteredWord);
        userInputEl.value = "";
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}

// Function to create and add words to Word Cloud
function createAndAddWordToWordCloud(word) {
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = `${Math.ceil(Math.random() * 20) + 15}px`;
    wordEl.style.color = getRandomColor();
    wordEl.classList.add("word-item");
    wordEl.addEventListener("click", () => displayQuote(word));
    wordsContainerEl.appendChild(wordEl);
}

// Get a random color for words
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    return "#" + Array.from({
        length: 6
    }).map(() => letters[Math.floor(Math.random() * 16)]).join("");
}

// Initialize the word cloud with some initial words
wordCloud.forEach(createAndAddWordToWordCloud);