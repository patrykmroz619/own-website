type SectionScrollListenerCallback = (isSectionVisible: boolean) => void;

type SectionScrollListenerType = (
    identifier: SectionId,
    callback: SectionScrollListenerCallback
) => void;

const SectionListenerCallbacksMap = new Map<
    SectionId,
    SectionScrollListenerCallback[]
>();

export const addSectionScrollListener: SectionScrollListenerType = (
    identifier,
    callback
) => {
    const callbacks = SectionListenerCallbacksMap.get(identifier) || [];
    SectionListenerCallbacksMap.set(identifier, [...callbacks, callback]);
};

type AllSectionsScrollListenerCallback = (
    from: SectionId,
    to: SectionId
) => void;

type AllSectionsScrollListenerType = (
    callback: AllSectionsScrollListenerCallback
) => void;

const allSectionsListenerCallbacks: AllSectionsScrollListenerCallback[] = [];

export const addAllSectionsScrollListener: AllSectionsScrollListenerType = (
    callback
) => {
    allSectionsListenerCallbacks.push(callback);
};

type DispatchScrollChange = (from: SectionId, to: SectionId) => void;

export const dispatchScrollChange: DispatchScrollChange = (from, to) => {
    const fromCallbacks = SectionListenerCallbacksMap.get(from);
    fromCallbacks?.forEach((callback) => callback(false));

    const toCallbacks = SectionListenerCallbacksMap.get(to);
    toCallbacks?.forEach((callback) => callback(true));

    allSectionsListenerCallbacks.forEach((callback) => callback(from, to));
};
