const wordChoices = {
    'word1': ['cat', 'dog', 'bird', 'rabbit'], // Choices for word 1
    'word2': ['ran', 'jumped', 'flew', 'hopped'], // Choices for word 2
    'word3': ['quickly', 'slowly', 'happily', 'quietly'], // Choices for word 3
    'word4': ['to', 'from', 'under', 'over'], // Choices for word 4
    'word5': ['the house', 'the tree', 'the park', 'the lake'] // Choices for word 5
};

let selectedWords = {}; // Object to store selected words

function selectWord(wordKey) {
    const words = wordChoices[wordKey]; // Get choices for selected word category
    const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
    const selectedWord = words[randomIndex]; // Select a word based on the random index
    selectedWords[wordKey] = selectedWord; // Store the selected word
    document.getElementById(wordKey).innerHTML = selectedWord; // Update the button text
}

function viewStory() {
    const story = Object.values(selectedWords).join(' '); // Combine selected words into story
    document.getElementById('story').innerHTML = "<p>Your Story: " + story + "</p>"; // Display story
}

function generateRandomStory() {
    for (const wordKey in wordChoices) {
        selectWord(wordKey); // Select random word for each word category
    }
    viewStory(); // Display generated story
}

function resetStory() {
    selectedWords = {}; // Reset selected words
    const wordKeys = Object.keys(wordChoices); // Get the keys of wordChoices object
    for (let i = 0; i < wordKeys.length; i++) {
        const wordKey = wordKeys[i];
        document.getElementById(wordKey).innerHTML = 'Word ' + (i + 1); // Reset button text to default
    }
    document.getElementById('story').innerHTML = ''; // Clear story display
}