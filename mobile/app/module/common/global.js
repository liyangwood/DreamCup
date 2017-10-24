import React from 'react';
import {Modal, View} from 'react-native';
import {Cache} from 'app/lib';

const GlobelModal = class extends React.Component{
  constructor(p){
    super(p);
    this.state = this.defaultState();

    this.animation = 'slide';
  }
  defaultState(){
    return {
      show : false,
      child : null
    };
  }
  render(){

    return (
      <Modal
        animationType={this.animation}
        transparent={true}
        visible={this.state.show}
        onRequestClose={()=>{}}
      >
        {this.state.child && React.createElement(this.state.child)}
      </Modal>
    );
  }

  show(opts){
    const opt = _.merge({
      animation : 'slide'
    }, opts||{});

    const defaultChild = null;
    this.animation = opt.animation;
    this.setState({
      show : true,
      child : opt.child || defaultChild
    });
  }
  close(){
    this.setState({
      show : false
    });
  }

  componentDidMount(){
    Cache.method.register('modal', (f, param={})=>{
      if(f === 'open'){
        this.show(param);
      }
      else{
        this.close();
      }
    });

  }
};

export {
  GlobelModal
};
