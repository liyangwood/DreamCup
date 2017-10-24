import React from 'react';
import {Container, Header, Left, Body, Title, Right} from 'native-base';
import KG from 'kg';
import {Loading} from 'app/module/ui';

const style = KG.Style.create({
  box : {
    backgroundColor: '$mainBG'
  },
  header : {
    backgroundColor: '$primary_color',
    borderColor: '$primary_color',
    borderBottomWidth: null
  },
  header_text : {
    color : '$primary_font_color'
  },
  main : {

  }
});
console.log(111, style);


export default class extends React.Component{
  constructor(p){
    super(p);

    this.ord_init();
  }

  render(){
    return this.ord_renderPage();
  }

  ord_renderPage(){
    const header_props = this.ord_defineHeaderProps();

    return (
      <Container style={style.box}>
        {this.ord_renderHeader(header_props)}

        <Container style={style.main}>
          {this.ord_checkLoading() ? this.ord_renderLoading() : this.ord_renderMain()}
        </Container>

        {this.ord_renderFooter()}
      </Container>
    );
  }

  ord_checkLoading(){
    return false;
  }

  ord_renderLoading(){
    return (
      <Loading />
    );
  }

  ord_renderHeader(p){
    return (
      <Header style={style.header} {...p}>
        <Left>
          {this.ord_renderHeaderLeft()}
        </Left>

        <Body>
          {this.ord_renderHeaderTitle()}
        </Body>

        <Right>
          {this.ord_renderHeaderRight()}
        </Right>
      </Header>
    );
  }

  ord_renderMain(){
    return null;
  }

  ord_renderFooter(){
    return null;
  }

  ord_renderHeaderLeft(){
    return null;
  }

  ord_renderHeaderRight(){
    return null;
  }

  ord_renderHeaderTitle(){
    return (
      <Title style={style.header_text}>{this.ord_defineHeaderTitle()}</Title>
    );
  }

  ord_defineHeaderTitle(){
    return null;
  }

  ord_defineHeaderProps(){
    return {};
  }

  ord_init(){}
}
