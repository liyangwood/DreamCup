import Base from '../Base';
import helloworld from './helloworld';

export default Base.setRouter([
	{
		path: '/hello',
		action: helloworld,
		method: 'get'
	},
]);