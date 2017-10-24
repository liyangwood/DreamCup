import React from 'react';
import {View, Container, Content, Item, Button, Input, Form, Label, Text, Icon, Toast} from 'native-base';
import KG from 'kg';
import DrawerPage from 'app/module/common/DrawerPage';
import {Error} from 'app/lib';
import {ErrorText, Loading} from 'app/module/ui';

const style = KG.Style.create({
  box : {

  },

  btnBox : {
    marginTop : 20
  },

  loginBtn : {

  }
});

export default class extends DrawerPage{

  ord_renderMain(){
    const {isLogin} = this.props;
    if(isLogin){
      return null;
    }
    else{
      return this.renderLoginForm();
    }
  }

  ord_init(){
    this.param = {
      username : null,
      password : null
    };
    this.state = {
      error : null,
      btn_loading : false
    };
  }

  renderLoginForm(){
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
        this.param.password = t;
      }
    };

    return (
      <Content gap style={style.box}>
        <Item>
          <Icon name="user" />
          <Input {...user_p} />
        </Item>
        <Item>
          <Icon name="lock" />
          <Input {...pwd_p} />
        </Item>

        {this.renderErrorText()}

        <View style={style.btnBox}>
          <Button onPress={this._login.bind(this)} block style={style.loginBtn}>
            {
              this.state.btn_loading ?
              (<Loading color="#fff" />)
              :
              (<Text>Login</Text>)
            }

          </Button>
        </View>

      </Content>
    );
  }

  ord_defineHeaderTitle(){
    return 'Login Milo';
  }

  _login(){
    if(this.state.btn_loading) return false;
    const {username, password} = this.param;

    this.setState({
      btn_loading : true
    });

    this.props.login(username, password, {
      error : (e)=>{
        Error.inspect(e);
        this.setState({
          error : e.message,
          btn_loading : false
        });
      },
      success : ()=>{
        this.setState({
          btn_loading : false
        });
      }
    });
  }

  renderErrorText(){
    if(!this.state.error){
      return null;
    }

    return (
      <ErrorText text={this.state.error}></ErrorText>
    );

  }

};
