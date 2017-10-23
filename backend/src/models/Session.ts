import * as _ from 'lodash';

export class Session {
	public user_id: string;
	private _session;

	// _session use koa-session
	public constructor(_session) {
		this._session = _session;
	}

	public get(key: string){
		return _.get(this._session, key, '');
	}

	public save(){
		return this._session.save();
	}

	public set(key, value){
		this._session[key] = value;
	}
}



