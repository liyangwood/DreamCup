export class Session {
	public user_id: string;
	public createAt: Date;
	public constructor() {
		this.createAt = new Date();
	}
}

export const mockSession = ()=>{
	return new Session();
};


