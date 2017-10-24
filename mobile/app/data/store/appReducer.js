import {_} from 'kg';
import type from './constant';

const DEFAULT = {
  currentUser : null,
  isLogin : false
};

export default (state=DEFAULT, action={})=>{
  switch(action.type){
    case type.app.login:
      return {
        ...state,
        isLogin : true,
        currentUser : action.user
      };
    case type.app.logout:
      return {
        ...state,
        isLogin : false,
        currentUser : null
      };
  }

  return state;
};
