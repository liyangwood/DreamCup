import { Context } from 'koa';
import Router from '../models/Router';
import { EntityManager, getManager } from 'typeorm';
import * as _ from 'lodash';

interface Routing {
	path: string;
	action: any;
	method: string;
}


abstract class Base {
	ctx: Context;

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
}

export default Base;
