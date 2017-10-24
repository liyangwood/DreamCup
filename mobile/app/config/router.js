
import LoginContainer from 'app/module/Login/LoginContainer';
import HomeContainer from 'app/module/Home/HomeContainer';
import RegisterContainer from 'app/module/Login/RegisterContainer';


const F = {


	home : {
		path : 'home',
		screen : HomeContainer,
		statusBar : {
			show : true
		},
		navigationOptions : {
			gesturesEnabled : false
		}
	},

	login : {
		path : 'login',
		screen : LoginContainer
	},
	register : {
		path : 'register',
		screen : RegisterContainer
	},


	init : 'home'
};
export default F;
