declare global {
    interface ImportMeta {
        env: {
            SNOWPACK_PUBLIC_API_URL: string;
        };
    }
}

export const fetchMessage = (message: Message) => {
    const { SNOWPACK_PUBLIC_API_URL: apiUrl } = import.meta.env;

    return fetch(apiUrl + '/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
};
