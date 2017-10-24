import Base from './Base';


import {_, moment, IHStyle, util} from './utils';

// import styles from './style';


const init = (param)=>{
	param = _.extend({
		theme : 'default',
		themeStyle : {}
	}, param||{});


	IHStyle.build(_.merge({}, param.themeStyle));
};

export default {
	Base,


	_,
	moment,
	Style : IHStyle,
	util,
	init,
};

export {
	_,
	moment,
	util
};