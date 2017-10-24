import user from './user';

import {Queue, Error, Log} from 'app/lib';


const _log = Log.create('data/api');

const q = Queue.create();

const F ={
  user
};

const call = async (...args)=>{
  const key = args[0];
  const fn = _.get(F, key, null);
  if(!fn){
    Error.create(`dm.api.${key} is not a valid`);
    return false;
  }

  const callback = args[1];
  await q.add(async ()=>{
    try{
      const res = await fn.apply(null, _.slice(args, 2));
      callback(null, res);
    }catch(e){
      callback(e);
    }
  });


  return true;
};

// q.stop();
// setTimeout(function(){
//   _log.info('restart api queue');
//   q.start();
// }, 5000);

export default {
  ...F,
  call
};
