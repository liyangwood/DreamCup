import React from 'react';
import DrawerPage from 'app/module/common/DrawerPage';
import {View, ontainer, Content, Form, Item, Input, Body, Button, Text, Toast, Icon} from 'native-base';
import {ErrorText, Loading} from 'app/module/ui';
import KG from 'kg';
import {Error} from 'app/lib';

const sy = KG.Style.create({
  box : {
    backgroundColor : '#fff'
  },

  btn_box : {
    marginTop : 20
  }
});

export default class extends DrawerPage{
  ord_defineHeaderTitle(){
    return 'Signup Milo';
  }

  ord_renderMain(){
    return (
      <Content gap style={sy.box}>
        {this.renderRegisterForm()}
        {this.state.error && <ErrorText text={this.state.error} />}
        {this.renderButton()}
      </Content>
    );
  }

  ord_init(){
    this.param = {
      username : null,
      pwd : null,
      pwd2 : null
    };

    this.state = {
      btn_loading : false,
      error : null
    };
  }

  renderRegisterForm(){
    const user_p = {
      placeholder : 'username',
      onChangeText : (t)=>{
        this.param.username = t;
      },
      keyboardType : 'email-address'
    };
    const pwd_p = {
      secureTextEntry : true,
      placeholder : 'password',
      onChangeText : (t)=>{
        this.param.pwd = t;
      }
    };
    const pwd2_p = {
      secureTextEntry : true,
      placeholder : 'password',
      onChangeText : (t)=>{
        this.param.pwd2 = t;
      }
    };
    return (
      <View>
        <Item>
          <Icon name="user" />
          <Input {...user_p} />
        </Item>
        <Item>
          <Icon name="lock" />
          <Input {...pwd_p} />
        </Item>
        <Item>
          <Icon name="lock" />
          <Input {...pwd2_p} />
        </Item>
      </View>
    );
  }

  renderButton(){
    return (
      <View style={sy.btn_box}>
        <Button onPress={this.regisger.bind(this)} block>
          {
            this.state.btn_loading ?
            (<Loading color="#fff" />)
            :
            (<Text>Register</Text>)
          }

        </Button>
      </View>
    );
  }

  regisger(){
    if(this.state.btn_loading){
      return false;
    }
    this.setState({
      btn_loading : true
    });

    this.props.register(this.param, {
      success : ()=>{
        this.setState({
          btn_loading : false
        });
      },
      error : (e)=>{
        Error.inspect(e);
        this.setState({
          error : e.message,
          btn_loading : false
        });
      }
    });
  }
};
