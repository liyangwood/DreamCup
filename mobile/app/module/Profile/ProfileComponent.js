import React from 'react';
import DrawerPage from 'app/module/common/DrawerPage';
import {I18N, IHStyle, styles} from 'ihcomponent';
import {View, Thumbnail, Container, Content, List, ListItem, Left, Right, Icon, Text, Button} from 'native-base';
import Class from 'app/data/class';

const sy = IHStyle.create({
  box : {

  },
  btn_box : {
    marginTop : 20
  },
  avatar_box : {
    ...styles.layout.h_center,
    marginTop : 20
  },
  avatar : {

  }
});

export default class extends DrawerPage{
  ord_init(){
    this.user = null;

    this.state = {
      loading : false
    };
  }

  ord_defineHeaderTitle(){
    return I18N.get('Profile');
  }

  ord_checkLoading(){
    return this.state.loading;
  }

  ord_renderMain(){
    const {user} = this.props;
    if(!user){
      // not login
      return this.renderLoginBox();
    }


    this.user = Class.create('User', user);

    return (
      <Content style={sy.box}>
        {this.renderUserAvatar(this.user)}
        {this.renderUserInfo(this.user)}
        {this.renderLogoutButton()}
      </Content>
    );
  }

  renderUserAvatar(userObject){
    return (
      <View style={sy.avatar_box}>
        <Thumbnail large source={{uri: userObject.format('avatar')}} style={sy.avatar} />
      </View>
    );
  }

  renderUserInfo(userObject){
    return (
      <List>
        <ListItem>
          <Left>
            <Text>Name</Text>
          </Left>
          <Right>
            <Text>{userObject.format('fullName')}</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Sex</Text>
          </Left>
          <Right>
            <Text>{userObject.format('sex')}</Text>
          </Right>
        </ListItem>
      </List>
    );
  }

  renderLoginBox(){
    return (
      <Container style={sy.login_box}>
        <Button block onPress={this.fakeLogin.bind(this)}><Text>Login now</Text></Button>
      </Container>
    );
  }

  fakeLogin(){
    this.props.showLoginBox();
  }

  componentDidMount(){

  }

  renderLogoutButton(){
    return (
      <View gap style={sy.btn_box}>
        <Button block onPress={this.logout.bind(this)}><Text>Logout</Text></Button>
      </View>
    );
  }

  logout(){
    this.props.logout();
  }
};
