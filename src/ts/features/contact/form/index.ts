import { isApiResponseBody } from '@utils/isApiResponseBody';
import {
    discardErrorMessage,
    isResponseBodyWithMessageErrors,
    setErrorDataMessage,
    setErrorSendingMessage,
} from './error';
import { fetchMessage } from './fetchMessage';
import { getFormData } from './getFormData';
import { setPending, unsetPending } from './pending';
import { discardSuccessMessage, setSuccessMessage } from './success';

const contactForm = document.querySelector('.contact__form') as HTMLFormElement;

export const handleContactForm = () => {
    const onSubmit = (e: Event) => {
        e.preventDefault();
        const formData = getFormData(contactForm);

        const message = {
            name: String(formData.name || ''),
            email: String(formData.email || ''),
            subject: String(formData.subject || ''),
            content: String(formData.content || ''),
        };

        discardErrorMessage();
        discardSuccessMessage();
        setPending();

        fetchMessage(message)
            .then((response) => {
                unsetPending();
                switch (response.status) {
                    case 200:
                        setSuccessMessage();
                        break;
                    case 422:
                        return response.json();
                    default:
                        setErrorSendingMessage();
                }
            })
            .then((body: unknown) => {
                if (isApiResponseBody(body)) {
                    if (isResponseBodyWithMessageErrors(body)) {
                        setErrorDataMessage(body.data);
                        return;
                    }
                }
            });
    };
    contactForm.addEventListener('submit', onSubmit);
};
