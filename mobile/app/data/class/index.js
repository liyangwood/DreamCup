import User from './User';
import {Error} from 'app/lib';

const F = {
  create(name, data){

    let o = null;
    switch(name){
      case 'User':
        o = new User(data);
        break;
      default:
        return Error.create('invalid class name');
    }

    return o;
  },

  User
};

export default F;
