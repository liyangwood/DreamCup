
import { EntityManager } from 'typeorm';
import BaseEntity from '../entity/Base';
import {Session} from '../models/Session';


export default class {
	private entityManager: EntityManager;
	private session: Session;

	constructor(entityManager: EntityManager, session: Session) {
		this.entityManager = entityManager;
		this.session = session;
	}


	async checkPermission<T extends BaseEntity>(doc: T) {
		return true;
	}


	public async insert<T extends BaseEntity>(doc: T) {
		return await this.entityManager.save(doc);
	}

}