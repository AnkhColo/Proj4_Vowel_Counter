const textLine = document.getElementById('textLine');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', countVowel);

function countVowel(){
    const textSentence = textLine.value;

    if (textSentence.trim() !== ""){
        const pureText = textSentence.trim();

        //comment test
    }
}