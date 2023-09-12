const textLine = document.getElementById('textLine');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', countVowel);

function countVowel(){
    const textSentence = textLine.value;

    if (textSentence.trim() !== ""){
        const pureText = textSentence.trim();
        const noWhiteSpaces = pureText.replace(/\s+/g, '');
        const vowelsConsonants = noWhiteSpaces.replace(/\[^a-zA-Z]/g, '');
        const vowelCount = 0;
        const incrementValue = 1;

        for(let i = 0; i <= vowelsConsonants.length; i++){
            let char = vowelsConsonants[i];

            if ("aeiouAEIOU".includes(char)){
                vowelCount += incrementValue;

                alert('Vowel count is: ${vowelCount}!');
            }
        }

    }
}