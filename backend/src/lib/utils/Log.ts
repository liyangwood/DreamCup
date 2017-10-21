export default class {
	public static info = (...args)=>{
		console.log.apply(console, ['[INFO]', ...args]);
	};
}