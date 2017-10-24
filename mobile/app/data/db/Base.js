import {_} from 'kg';
import {Log} from 'app/lib';
const _log = Log.create('db/Base');

export default class{
  static schema = {};

  constructor(db){
    this._db = db;
    this._init();
  }


  gen(id){
    try{
      return _.first(this._db.objects(this.name).filtered(`id="${id}"`));
    }catch(e){
      _log.info(e);
      return null;
    }
  }
  remove(param){
    if(arguments.length === 1 && _.isString(param)){
      try{
        this._db.write(() => {
          this._db.delete(this._db.objects(this.name).filtered(`id="${param}"`));
        });
      }catch(e){
        _log.info(e);
      }


      return true;
    }

    //TODO
    _log.info('comming soon');
  }

  save(data){
    this._db.write(()=>{
      this._db.create(this.name, data, true);
    });
    return true;
  }


  //override
  _init(){
    this.name = 'Base';
  }

}
