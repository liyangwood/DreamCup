import Base from '../Base';
import register from './register';
import login from './login';

export default Base.setRouter([
	{
		path: '/register',
		action: register,
		method: 'all'
	},
	{
		path : '/login',
		action : login,
		method : 'all'
	}
]);