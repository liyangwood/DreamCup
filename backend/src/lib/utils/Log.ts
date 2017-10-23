export default class {
	public static info = (...args)=>{
		console.log.apply(console, ['[INFO]', ...args]);
	};

	public static error = (...args)=>{
		console.log.apply(console, ['[ERROR]', ...args]);
	}
}