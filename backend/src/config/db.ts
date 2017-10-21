import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';
import './env';

const isDev = process.env.NODE_ENV === 'development' ? true : false;

export const dbOptions: ConnectionOptions[] = [
	{
		type: 'mysql',
		host: process.env.MYSQL_SERVER_NAME,
		name: 'main',
		description: 'Main Database',
		port: 3306,
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
		synchronize: isDev,
		entities: [__dirname + '/../entity/**/*'],
		logging: isDev ? ['error', 'query', 'schema'] : ['error'],
		logger: 'advanced-console'
	}
];