import Base from '../Base';
import register from './register';

export default Base.setRouter([
	{
		path: '/register',
		action: register,
		method: 'all'
	},
]);