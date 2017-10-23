import Base from '../Base';
import {Log} from '../../lib/utils';
import UserService from '../../services/UserService';

export default class extends Base {
	async action() {
		const query = this.getQuery();

		try{
			const user_service = new UserService(this.mysql, this.session);
			const user = await user_service.registerNewUser(query);

			Log.info('/user/register', user);
			this.json(1, {}, 'ok');
		} catch(e){
			Log.error(e);
			this.json(-1, e.message);
		}

	}
}
