type MediaQueryType = (
    query: string,
    onMatch: () => void,
    onNotMatch: () => void
) => () => void;

export const addMediaQueryListener: MediaQueryType = (
    query,
    onMatch,
    onNotMatch
) => {
    const media = window.matchMedia(query);

    const onMediaChange = (matches: boolean) => {
        if (matches) {
            onMatch();
        } else {
            onNotMatch();
        }
    };

    const onMediaChangeListener = (e: MediaQueryListEvent) =>
        onMediaChange(e.matches);
    media.addEventListener('change', onMediaChangeListener);

    onMediaChange(media.matches);

    return () => {
        media.removeEventListener('change', onMediaChangeListener);
    };
};
