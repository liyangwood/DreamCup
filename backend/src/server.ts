import 'reflect-metadata';
import { createConnections } from 'typeorm';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';

import { mysql_config } from './config/db';
import cors from './lib/third/cors';
import router from './controller';

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnections([
	mysql_config
])
	.then(async connections => {
		// create koa app
		const app = new Koa();
		app.keys = [process.env.SECRET||''];
		// run app
		app
			.use(cors({}))
			.use(session({
				key : 'dream-cup:session',
				maxAge : 1000*60*60*24*7,
				rolling : true
			}, app))
			.use(bodyParser())
			.use(router.routes())
			.use(router.allowedMethods())
			.listen(process.env.PORT || 3000);
		console.log(`dreamcup backend is up and running on port ${process.env.PORT || 3000}`);
	})
	.catch(error => {
		console.log('Database connection error: ', error);
		process.exit(1);
	});