const dynamicText = document.querySelector("h1 span");
const words = ["passionnant", "amusant", "l'avenir"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TypeEffect = () => {
    const curentWord = words[wordIndex];
    const currentChar = curentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < curentWord.length) {
        // si la condition est vraie on tape le prochain caractère
        charIndex++;
        setTimeout(TypeEffect, 200)
    } else if (isDeleting && charIndex > 0) {
        // si la condition est vraie, on retire le précédent caractère
        charIndex--;
        setTimeout(TypeEffect, 100)
    } else {
        // si le mot est effacé, on passe au suivant
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(TypeEffect, 1200);
    }
}

TypeEffect();