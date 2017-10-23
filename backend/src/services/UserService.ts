import Base from './Base';

import User from '../entity/User';

interface RegisterUser {
	username: string;
	password: string;

}

export default class extends Base {
	public async registerNewUser(param: RegisterUser){
		// validate param
		if(!param.username || !param.password){
			throw new Error('invalid param');
		}

		const user = new User();
		user.username = param.username;
		user.token = param.password;


		await this.dao.insert(user);
	}
}