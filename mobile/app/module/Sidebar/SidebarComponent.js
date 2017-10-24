import React from 'react';
import {Content, Text, List, ListItem, Container} from 'native-base';
import KG from 'kg';

const style = KG.Style.create({
  box : {
    backgroundColor : '$drawerBG',
    flex : 1,
    paddingTop : '$statusBarHeight'
  },
  font : {
    color : '#fff',
    fontSize : 18
  }
});

export default class extends React.Component{
  render(){
    return (
      <Container style={style.box}>
        <Text>Side bar</Text>
        {this.renderNavList()}
      </Container>
    );
  }

  getNavList(){
    const {isLogin} = this.props;
    if(isLogin){
      return this.props.nav_list;
    }
    else{
      return this.props.nav_nl_list;
    }
  }

  renderNavList(){
    const list_p = {
      button : true,
      dataArray : this.getNavList(),
      renderRow : this.renderEachList.bind(this)
    };

    return (
      <Content>
        <List {...list_p} />
      </Content>
    );
  }

  renderEachList(d){
    return (
      <ListItem onPress={this.clickList.bind(this, d)}>
        <Text style={style.font}>{d.name}</Text>
      </ListItem>
    );
  }

  clickList(d){
    this.props.changeNav(d.router);
  }
};
