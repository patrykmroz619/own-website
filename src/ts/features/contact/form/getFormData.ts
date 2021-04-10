export const getFormData = (form: HTMLFormElement) => {
    const formData = new FormData(form);

    return {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        content: formData.get('content'),
    };
};
