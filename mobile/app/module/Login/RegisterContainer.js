import {createContainer, Cache} from 'app/lib';
import RegisterComponent from './RegisterComponent';
import dm from 'app/data';

export default createContainer(RegisterComponent, (state)=>{
  return {

  };
}, ()=>{
  return {
    register : async (param, opts={})=>{
      await dm.method.call('user.register', param, (error, flag)=>{
        if(error){
          opts.error && opts.error(error);
        }
        else{
          opts.success && opts.success(flag);
          //register success, go to login
          Cache.method.call('goPath', 'login');

        }

      });
    }
  };
});
