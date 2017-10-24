import error from 'app/config/error';
import {_} from 'kg';

const IHError = class extends Error{
  constructor(reason, ...args){
    super(args);
    this.reason = reason;
  }
};

const ERROR = class{
  constructor(type='NA'){
    this.type = type;
  }

  out(reason, info){
    throw new IHError(reason, info);
  }

  format(code, param){
    const str = _.get(error[this.type], code, null);

    this.out(code, _.template(str)(param));
  }
};

export default {
  create(type, reasonOrCode, info){
    if(info && _.isObject(info)){
      (new ERROR(type)).format(reasonOrCode, info);
    }
    else{
      (new ERROR()).out(type, reasonOrCode);
    }
  },
  build(type){
    return new ERROR(type);
  },
  inspect(e){
    if(__DEV__){
      const rs ={
        reason : e.reason,
        message : e.message
      };
      console.log(rs);
      return rs;
    }
    else{
      return null;
    }
  }
};
