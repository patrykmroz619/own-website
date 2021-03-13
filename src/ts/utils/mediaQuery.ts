type MediaQueryType = (
    query: string,
    onMatch: () => void,
    onNotMatch: () => void
) => void;

export const mediaQuery: MediaQueryType = (query, onMatch, onNotMatch) => {
    const media = window.matchMedia(query);

    const onMediaChange = (matches: boolean) => {
        if (matches) {
            onMatch();
        } else {
            onNotMatch();
        }
    };

    media.addEventListener('change', (e) => onMediaChange(e.matches));

    onMediaChange(media.matches);
};
