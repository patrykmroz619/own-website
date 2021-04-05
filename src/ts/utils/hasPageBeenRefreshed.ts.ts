type PerformanceEntryWithType = PerformanceEntry & { type: string };

const isPerformanceEntryWithType = (
    performanceEntry: any
): performanceEntry is PerformanceEntryWithType => {
    if (performanceEntry.type) {
        return true;
    }

    return false;
};

export const hasPageBeenRefreshed = () => {
    const entries = performance.getEntriesByType('navigation');
    const entry = entries[0];

    if (isPerformanceEntryWithType(entry)) {
        return entry.type === 'reload';
    }

    return false;
};
