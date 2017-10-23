import Router from '../models/Router';
import { isDev } from '../lib/utils';

import test from './test';
import user from './user';

const router = new Router();

if(isDev()){
	router.use('/test', test.routes());
}

router.use('/user', user.routes());


export default router;