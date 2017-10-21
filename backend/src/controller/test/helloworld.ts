import Base from '../Base';

export default class extends Base {
	async action() {
		this.json(1, 'helloworld', 'success');
	}
}