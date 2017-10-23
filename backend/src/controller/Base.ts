import { Context } from 'koa';
import Router from '../models/Router';
import { EntityManager, getManager } from 'typeorm';
import * as _ from 'lodash';
import {mysql_config} from '../config/db';
import {Session, mockSession} from '../models/Session';

interface Routing {
	path: string;
	action: any;
	method: string;
}


abstract class Base {
	public ctx: Context;
	public mysql: EntityManager;
	public session: Session;

	static setRouter(list: Routing[]): Router {
		const router = new Router();
		_.each(list, (item)=>{
			router[item.method](item.path, (ctx: Context)=>{
				const c = new item.action(ctx);

				return c.main();
			});
		});
		return router;
	}

	constructor(ctx) {
		this.ctx = ctx;
		this.mysql = getManager(mysql_config.name);
		this.session = mockSession();
	}
	async validate() {
		return true;
	}

	private async main(): Promise<any> {
		try {
			if (!await this.validate()) {
				return false;
			}
			return await this.action();
		} catch (e) {
			console.log(e);
			this.json(-1, e.message);
		}
	}

	abstract async action(): Promise<any>;


	/*
	 * @param
	 * status: greater than 0 means success, less than 0 means error
	 * data: data entity
	 * info: info text
	 */
	json(status: number, data: any, info: string = ''): void {
		const rs: any = {
			status,
			info
		};
		if (status > 0) {
			rs.data = data;
			rs.info = info;
		} else {
			rs.error = data;
		}
		this.ctx.type = 'application/json';
		this.ctx.body = JSON.stringify(rs);
	}

	redirect(path: string) {
		this.ctx.response.redirect(path);
		return false;
	}

	// get user input
	public getQuery(){
		const method = this.ctx.request.method.toLowerCase();
		if(method === 'get'){
			return this.ctx.request.query;
		}

		return this.ctx.request.body;
	}
}

export default Base;
