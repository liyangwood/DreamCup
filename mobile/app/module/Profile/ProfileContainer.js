import {createContainer, Cache} from 'app/lib';
import ProfileComponent from './ProfileComponent';
import dm from 'app/data';

export default createContainer(ProfileComponent, (state)=>{
  return {
    user : state.app.currentUser
  };
}, ()=>{
  return {
    showLoginBox : ()=>{
      
    },
    logout : async ()=>{
      await dm.method.call('user.logout', (err, flag)=>{
        if(flag){
          Cache.method.call('goPath', 'login', 'reset');
        }
      });
    }
  };
});
