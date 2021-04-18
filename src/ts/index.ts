import { handleNavigations } from './navigations';
import { runFeatures } from './features';
import { fixVh } from '@utils/fixVh';
import { handleError } from './handleError';

declare global {
    interface ImportMeta {
        env: {
            SNOWPACK_PUBLIC_API_URL: string;
            SNOWPACK_PUBLIC_SENTRY_DNS: string;
            MODE: string;
        };
    }
}

try {
    fixVh();
    handleNavigations();
    runFeatures();
} catch (e: unknown) {
    if (import.meta.env.MODE !== 'development') {
        handleError(e);
    }
}
