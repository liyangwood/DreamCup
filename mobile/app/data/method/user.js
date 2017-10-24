
export default (dm)=>{
  const F = {


    async login(username, password, callback){
      const param = {
        username,
        password
      };
      //TODO validte param format here

      try{
        const user = await dm.api.user.login(param);

        //put into redux
        dm.dispatch(dm.action.user.login(user));

        callback(null, user);
      }catch(e){
        callback(e);
      }
    },

    async register(param, callback){

      //TODO validte param format here

      try{
        const res = await dm.api.user.register(param);

        callback(null, res.status);
      }catch(e){
        callback(e);
      }
    },

    async logout(callback){
      try{
        const res = await dm.api.user.logout();

        //refresh redux
        dm.dispatch(dm.action.user.logout());

        callback(null, res.status);
      }catch(e){
        callback(e);
      }
    }
  };


  return F;
};
