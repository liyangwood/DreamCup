import {_} from 'kg';

export default class {
  static _db = null;
  static _name = 'Base';

  constructor(data=null){
    this.variables = data;

    this.id = data ? data.id : '';
    this._db = this.constructor._db;
  }

  //common methods
  async gen(id){
    const d = this._db.gen(id);
    if(!d){
      return null;
    }
    this.setData(d);
    return this;
  }

  //need override
  format(){
    return null;
  }

  get(key){
    return _.get(this.variables, key, null);
  }

  toData(){
    return this.variables;
  }
  setData(data){
    this.variables = data;
    if(data.id){
      this.id = data.id;
    }
  }


}
