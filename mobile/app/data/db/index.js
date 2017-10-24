import User from './User';
import Realm from 'realm';
import {Error} from 'app/lib';
import _ from 'lodash';

const MAP = {
  User
};

const RealmVersion = 1;
const RealmDB = new Realm({
  schema: _.map(_.values(MAP), (l)=>l.schema),
  schemaVersion: RealmVersion,
  migration : (oldRealm, newRealm)=>{
  }
});

export default {
  create(name){
    const rs = MAP[name];
    if(!rs){
      Error.create('invalid db name : '+name);
    }

    return new rs(RealmDB);
  }
};
