import React from 'react';
import {Drawer} from 'native-base';
import Sidebar from './SidebarContainer';
import {Cache} from 'app/lib';

export default class extends React.Component{

  getProps(){
    return {
      ref : (ref)=>(this.drawer = ref),
      content : (<Sidebar />),
      onClose : this.close.bind(this),
      children : this.props.content,
      panOpenMask : 0.2
    };
  }

  close(){
    this.drawer._root.close()
  }
  open(){
    this.drawer._root.open();
  }

  render(){
    const p = this.getProps();
    return (
      <Drawer {...p} />
    );
  }

  componentDidMount(){
    Cache.method.register('drawer', (f='close')=>{
      if(f === 'close'){
        this.close();
      }
      else{
        this.open();
      }
    });

    // this.open();
  }
};
