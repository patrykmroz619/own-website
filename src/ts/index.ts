import { handleNavigations } from './navigations';
import { runFeatures } from './features';
import { fixVh } from '@utils/fixVh';

fixVh();

handleNavigations();
runFeatures();
