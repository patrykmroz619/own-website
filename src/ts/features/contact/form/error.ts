type MessageErrors = Partial<Message>;

const errorElement = document.querySelector(
    '.contact__info--error'
) as HTMLElement;

export const setErrorDataMessage = (errors: MessageErrors) => {
    if (errors.name) {
        errorElement.textContent = errors.name;
    } else if (errors.email) {
        errorElement.textContent = errors.email;
    } else if (errors.subject) {
        errorElement.textContent = errors.subject;
    } else if (errors.content) {
        errorElement.textContent = errors.content;
    }

    errorElement.style.display = 'block';
};

export const setErrorSendingMessage = () => {
    errorElement.textContent = 'Wystąpił błąd podczas wysyłania wiadomości.';
    errorElement.style.display = 'block';
};

export const discardErrorMessage = () => {
    errorElement.style.display = 'none';
};

type ApiResponseBodyWithMessageErrors = ApiResponseBody<MessageErrors>;

export const isResponseBodyWithMessageErrors = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: ApiResponseBody<any>
): body is ApiResponseBodyWithMessageErrors => {
    return Boolean(
        body.data.name ||
            body.data.email ||
            body.data.subject ||
            body.data.content
    );
};
