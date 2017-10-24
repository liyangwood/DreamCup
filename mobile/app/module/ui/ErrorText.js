import React from 'react';
import {View} from 'react-native';
import {Container, Text} from 'native-base';
import KG from 'kg';

export default class extends KG.Base{
  renderMain(p){
    return (
      <View style={p.box}>
        <Text style={p.sy_text}>{p.text}</Text>
      </View>
    );
  }

  _defineMainProperty(){
    return {
      box : {
        marginTop : 5
      },
      sy_text : {
        fontSize : 12,
        color : '#f00',
        textAlign : 'right'
      },
      text : this.props.text
    };
  }
}
