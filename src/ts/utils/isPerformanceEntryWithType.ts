type PerformanceEntryWithType = PerformanceEntry & { type: string };

export const isPerformanceEntryWithType = (
    performanceEntry: any
): performanceEntry is PerformanceEntryWithType => {
    if (performanceEntry.type) {
        return true;
    }

    return false;
};
