import Base from '../Base';
import UserService from '../../services/UserService';

export default class extends Base {
	async checkSession(){
		return true;
	}
	async action() {
		const query = this.getQuery();

		const user_service = new UserService(this.mysql, this.session);
		const user = await user_service.loginWithUsernameAndToken(query);

		if(!user){
			throw new Error('invalid username or password');
		}

		this.setUserIdToSession(user.id);
		this.session.save();

		this.json(1, user, 'ok');

	}
}
