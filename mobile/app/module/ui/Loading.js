import React from 'react';
import {Spinner, Container} from 'native-base';
import KG from 'kg';

export default class extends KG.Base{
  renderMain(p){
    return (
      <Container style={p.box}>
        <Spinner color={p.color} />
      </Container>
    );
  }

  _defineMainProperty(){
    const sy = this.props.style || {};
    return {
      color : this.props.color || 'green',
      // box : _.merge({
      //   ...styles.layout.center
      // }, sy)
    };
  }
}
