const button = document.querySelector('.contact__button') as HTMLButtonElement;

export const setPending = () => {
    button.textContent = 'Wysyłanie...';
};

export const unsetPending = () => {
    button.textContent = 'Wyślij';
};
