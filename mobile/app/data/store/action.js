import type from './constant';


const F = {
  login : (user)=>{
    return {
      type : type.app.login,
      user
    };
  },

  logout(){
    return {
      type : type.app.logout
    };
  }
};

export default {
  user : F,

};
