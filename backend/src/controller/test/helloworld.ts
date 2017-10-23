import Base from '../Base';
import {Log} from '../../lib/utils';

export default class extends Base {
	async action() {
		Log.info('test controller');

		this.json(1, 'helloworld', 'success');
	}
}
