Function mostFrequentWord(words) {
    var wordFreq = {};
    for (var i = 0; i <= words.length; i++) {
        if (words[i] in wordFreq) {
            wordFreq[words[i]]++;
            else {
                wordFreq[words[i]]++;
            }
        }
    }
    var currentMaxKey = Object.keys(wordFreq)[0];
    var currentMaxCount = wordFreq[currentMaxKey];

    for (var word in wordFreq) {
        if (wordFreq[word] > currentMaxCount) {
            currentMaxKey = word;
            currentMaxCount = wordFreq[word];
        }
    }
    return currentMaxkey;
}

function getTokens(rawString) {
    // returns an alphabetically sorted list of words, removing punctuation
    // characters
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


(function testMostFrequentWord() {
        var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

        var expected = 'major';
        var actual = mostFrequentWord(getTokens(spaceOddityText));
        if (expected === actual) {
            console.log('SUCCESS: `mostFrequentWord` is working');
        } else {
            console.log('FAILURE: `mostFrequentWord` is not working');
