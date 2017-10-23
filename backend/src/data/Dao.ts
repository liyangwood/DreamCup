
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

	public async findOne<T extends BaseEntity>(doc: T){
		let rs;
		if(doc.id){
			rs = await this.entityManager.findOne(doc.getTableName(), doc.id);
		}
		else{
			rs = await this.entityManager.findOne(doc.getTableName(), doc);
		}

		return <T>rs;
	}

}