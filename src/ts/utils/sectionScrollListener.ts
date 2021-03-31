type SectionScrollListenerCallback = (isSectionVisible: boolean) => void;

type SectionScrollListenerType = (
    identifier: SectionId,
    callback: SectionScrollListenerCallback
) => void;

const CallbacksMap = new Map<SectionId, SectionScrollListenerCallback[]>();

export const addSectionScrollListener: SectionScrollListenerType = (
    identifier,
    callback
) => {
    const callbacks = CallbacksMap.get(identifier) || [];
    CallbacksMap.set(identifier, [...callbacks, callback]);
};

type DispatchScrollChange = (from: SectionId, to: SectionId) => void;

export const dispatchScrollChange: DispatchScrollChange = (from, to) => {
    const fromCallbacks = CallbacksMap.get(from);
    fromCallbacks?.forEach((callback) => callback(false));

    const toCallbacks = CallbacksMap.get(to);
    toCallbacks?.forEach((callback) => callback(true));
};
