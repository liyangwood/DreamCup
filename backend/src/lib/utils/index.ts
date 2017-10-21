import Log from './Log';

export const isDev = ()=>{
	return process.env.NODE_ENV === 'development';
};

export {
	Log
};