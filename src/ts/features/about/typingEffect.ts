const words = [
    'Jakość kodu.',
    'Wydajność.',
    'Miły dla oka design.',
    'Responsywność.',
];

const textElement = document.querySelector(
    '.contentSection__advantages'
) as HTMLElement;

let wordIndex = 0;
let letterIndex = 0;

textElement.textContent = '';

let pauseTime = 0;
let oldTime = 0;
let paused = true;

const typing = (newTime: number) => {
    if (!paused) {
        const delta = newTime - oldTime;
        pauseTime -= delta;
        oldTime = newTime;

        if (pauseTime <= 0) {
            if (letterIndex === 0) {
                textElement.textContent = '';
            }

            if (words[wordIndex]) {
                const letter = words[wordIndex][letterIndex];
                if (letter) {
                    textElement.textContent += letter;
                    letterIndex++;
                    pauseTime = 100;
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    pauseTime = 3000;
                }
            } else {
                wordIndex = 0;
            }
        }
        requestAnimationFrame(typing);
    }
};

export const runTyping = () => {
    paused = false;
    typing(0);
};

export const pauseTyping = () => {
    paused = true;
};
