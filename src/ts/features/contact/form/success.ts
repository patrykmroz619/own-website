const successElement = document.querySelector(
    '.contact__info--success'
) as HTMLElement;

export const setSuccessMessage = () => {
    successElement.style.display = 'block';

    setTimeout(discardSuccessMessage, 10000);
};

export const discardSuccessMessage = () => {
    successElement.style.display = 'none';
};
