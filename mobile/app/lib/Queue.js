import _ from 'lodash';

const Queue = class{
  constructor(){
    this.Q = [];

    this._stop = false;
    this.running = false;
  }

  stop(){
    this._stop = true;
  }

  start(){
    this._stop = false;
    this.run();
  }

  size(){
    return _.size(this.Q);
  }

  clear(){
    this.Q = [];
  }
  get(){
    return this.Q;
  }

  async add(func){
    this.Q.push(func);
    await this.run();
  }


  async run(){
    if(this.running){
      return false;
    }
    if(this.size() < 1 || this._stop){
      this.running = false;
      return false;
    }

    this.running = true;
    const func = this.Q.shift();
    await func.call(this);
    this.running = false;

    this.run();
  }
};

export default {
  create : ()=>{
    return new Queue();
  }
};
