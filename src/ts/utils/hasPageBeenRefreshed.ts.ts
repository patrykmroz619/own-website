type PerformanceEntryWithType = PerformanceEntry & { type: string };

const isPerformanceEntryWithType = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    performanceEntry: any
): performanceEntry is PerformanceEntryWithType => {
    if (performanceEntry.type) {
        return true;
    }

    return false;
};

export const hasPageBeenRefreshed = () => {
    try {
        const entries = performance.getEntriesByType('navigation');
        const entry = entries[0];

        if (isPerformanceEntryWithType(entry)) {
            return entry.type === 'reload';
        }
    } catch {
        return false;
    }
};
