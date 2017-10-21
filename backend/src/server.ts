import 'reflect-metadata';
import { createConnections } from 'typeorm';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import { dbOptions } from './config/db';
// import cors from './lib/cors';

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnections(dbOptions)
	.then(async connections => {
		// create koa app
		const app = new Koa();
		// run app
		app
			// .use(cors({}))
			.use(bodyParser())
			.listen(process.env.PORTNUMBER || 3000);
		console.log(`Milo is up and running on port ${process.env.PORTNUMBER || 3000}`);
	})
	.catch(error => {
		console.log('Database connection error: ', error);
		process.exit(1);
	});