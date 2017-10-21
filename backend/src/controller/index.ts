import Router from '../models/Router';
import { isDev } from '../lib/utils';

import test from './test';

const router = new Router();

if(isDev()){
	router.use('/test', test.routes());
}



export default router;