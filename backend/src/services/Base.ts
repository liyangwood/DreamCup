import {Session} from '../models/Session';
import { EntityManager } from 'typeorm';
import {Dao} from '../data';

export default class {
	entityManager: EntityManager;
	session: Session;
	dao: Dao;
	constructor(entityManager: EntityManager, session: Session) {
		this.entityManager = entityManager;
		this.session = session;
		this.dao = new Dao(entityManager, session);
	}
}