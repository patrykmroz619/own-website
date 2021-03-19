const words = ['Wydajność.', 'Miły dla oka design.', 'Responsywność.'];

const textElement = document.querySelector(
    '.contentSection__advantages'
) as HTMLElement;

export const runTyping = () => {
    let wordIndex = 0;
    let letterIndex = 0;

    textElement.textContent = '';

    let pauseTime = 0;
    let oldTime = 0;

    const typing = (newTime: number) => {
        const delta = newTime - oldTime;
        pauseTime -= delta;
        oldTime = newTime;

        if (pauseTime <= 0) {
            if (letterIndex === 0) {
                textElement.textContent = '';
            }

            if (words[wordIndex]) {
                if (words[wordIndex][letterIndex]) {
                    textElement.textContent += words[wordIndex][letterIndex];
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
    };

    typing(0);
};
