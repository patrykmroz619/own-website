export const splitText = (selector: string) => {
    const element = document.querySelector(selector);

    if (element && element.textContent) {
        const characters = element.textContent.split('');
        const characterElements: HTMLSpanElement[] = [];
        const fragment = document.createDocumentFragment();
        characters.forEach((char) => {
            const charWrapper = document.createElement('span');
            charWrapper.style.display = char != ' ' ? 'inline-block' : 'inline';
            charWrapper.textContent = char;
            characterElements.push(charWrapper);
            fragment.appendChild(charWrapper);
        });

        element.innerHTML = '';
        element.appendChild(fragment);

        return characterElements;
    }

    throw Error(`Element with ${selector} doesn't have any text`);
};
