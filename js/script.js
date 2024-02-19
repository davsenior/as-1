const wordChoices = {
    'word1': ['cat', 'dog', 'bird', 'rabbit'], 
    'word2': ['ran', 'jumped', 'flew', 'hopped'], 
    'word3': ['quickly', 'slowly', 'happily', 'quietly'], 
    'word4': ['to', 'from', 'under', 'over'],
    'word5': ['the house', 'the tree', 'the park', 'the lake']
};

let selectedWords = {};

function selectWord(wordKey) {
    const words = wordChoices[wordKey];
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    selectedWords[wordKey] = selectedWord;
    document.getElementById(wordKey).innerHTML = selectedWord;
}

function viewStory() {
    const story = Object.values(selectedWords).join(' ');
    document.getElementById('story').innerHTML = "<p>Your Story: " + story + "</p>";
}

function generateRandomStory() {
    for (const wordKey in wordChoices) {
        selectWord(wordKey);
    }
    viewStory();
}

function resetStory() {
    selectedWords = {};
    const wordKeys = Object.keys(wordChoices);
    for (let i = 0; i < wordKeys.length; i++) {
        const wordKey = wordKeys[i];
        document.getElementById(wordKey).innerHTML = 'Word ' + (i + 1);
    }
    document.getElementById('story').innerHTML = '';
} 