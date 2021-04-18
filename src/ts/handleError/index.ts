export const handleError = (e: unknown) => {
    const pageWrapper = document.querySelector('.wrapper') as HTMLElement;
    const errorElement = document.querySelector('.error') as HTMLElement;

    pageWrapper.innerHTML = '';
    errorElement.style.display = 'block';

    report(e);
};

const report = (e: unknown) => {
    const errorJSON = JSON.stringify(e, Object.getOwnPropertyNames(e));

    fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}/report`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: errorJSON,
    });
};
