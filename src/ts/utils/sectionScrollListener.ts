type SectionScrollListenerCallback = (isSectionVisible: boolean) => void;

type SectionIdentifier = string;

type SectionScrollListenerType = (
    identifier: SectionIdentifier,
    callback: SectionScrollListenerCallback
) => void;

const CallbacksMap = new Map<
    SectionIdentifier,
    SectionScrollListenerCallback[]
>();

export const addSectionScrollListener: SectionScrollListenerType = (
    identifier,
    callback
) => {
    const callbacks = CallbacksMap.get(identifier) || [];
    CallbacksMap.set(identifier, [...callbacks, callback]);
};

type DispatchScrollChange = (
    from: SectionIdentifier,
    to: SectionIdentifier
) => void;

export const dispatchScrollChange: DispatchScrollChange = (from, to) => {
    const fromCallbacks = CallbacksMap.get(from);
    fromCallbacks?.forEach((callback) => callback(false));

    const toCallbacks = CallbacksMap.get(to);
    toCallbacks?.forEach((callback) => callback(true));
};
