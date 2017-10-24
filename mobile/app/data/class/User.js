import Base from './Base';
import DB from 'app/data/db';
import {Log} from 'app/lib';

const _log = Log.create('class/User');

export default class extends Base{
  static _db = DB.create('User');
  static _name = 'User';

  format(method, param){
    switch(method){
      case 'fullName':
        return this.fullName;
      case 'avatar':
        return this.get('profile.avatar');
      case 'sex':
        return this.get('profile.sex');
    }

    return super.format(method, param);
  }



  get fullName(){
    const {firstName, lastName} = this.variables.profile;

    return `${firstName} ${lastName}`;
  }
}
