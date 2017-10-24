import Base from './Base';

export default class extends Base{
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties : {
      id : 'string',
      firstName : 'string',
      lastName : 'string',
      // name : 'string'
    }
  };

  _init(){
    super._init();
    this.name = 'User';
  }
}
