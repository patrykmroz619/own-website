import { isPerformanceEntryWithType } from './isPerformanceEntryWithType';

export const hasPageBeenRefreshed = () => {
    const entries = performance.getEntriesByType('navigation');
    const entry = entries[0];

    if (isPerformanceEntryWithType(entry)) {
        return entry.type === 'reload';
    }

    return false;
};
