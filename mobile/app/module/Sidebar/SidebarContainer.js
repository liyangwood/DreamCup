import {createContainer, Cache} from 'app/lib';
import SidebarComponent from './SidebarComponent';

export default createContainer(SidebarComponent, (state)=>{
  return {
    ...state.Sidebar,
    isLogin : state.app.isLogin
  };
}, ()=>{
  return {
    changeNav : (router)=>{

      Cache.method.call('goPath', router, 'reset');
      Cache.method.call('drawer', 'close');
    }
  };
});
