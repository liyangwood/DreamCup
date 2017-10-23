import Base from './Base';
import * as md5 from 'blueimp-md5';

import User from '../entity/User';

interface RegisterUser {
	username: string;
	password: string;
}


export default class extends Base {
	private convertPasswordToToken(password){
		return md5(password, process.env.SECRET);
	}

	private checkUsernameAndPassword(username, password){
		if(!username || !password){
			throw new Error('invalid param');
		}

		return true;
	}

	public async registerNewUser(param: RegisterUser){
		// validate param
		this.checkUsernameAndPassword(param.username, param.password);

		const user = new User();
		user.username = param.username;
		user.token = this.convertPasswordToToken(param.password);


		return await this.dao.insert(user);
	}

	public async loginWithUsernameAndToken(param: RegisterUser){
		this.checkUsernameAndPassword(param.username, param.password);

		// find user
		const query = new User();
		query.set({
			username: param.username,
			token : this.convertPasswordToToken(param.password)
		});

		const user = await this.dao.findOne(query);
		return user;
	}
}