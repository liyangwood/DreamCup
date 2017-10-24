import {createContainer, Cache} from 'app/lib';
import LoginComponent from './LoginComponent';
import dm from 'app/data';

export default createContainer(LoginComponent, (state)=>{
  return {
    isLogin : state.app.isLogin,
    currentUser : state.app.currentUser
  };
}, ()=>{
  return {
    login : async (username, password, opts={})=>{
      await dm.method.call('user.login', username, password, (error, flag)=>{
        if(error){
          opts.error && opts.error(error);
        }
        else{

          //login success, go to home page
          Cache.method.call('goPath', 'profile');
          opts.success && opts.success(flag);
        }

      });

    }
  };
});
