import React from 'react';
import {Container, Header, Left, Body, Title, Right, Icon, Button} from 'native-base';
import {Cache} from 'app/lib';
import BasePage from './BasePage';

export default class extends BasePage{

  ord_renderHeaderLeft(){
    return (
      <Button transparent onPress={this.open_drawer.bind(this)}>
        <Icon name='bars' />
      </Button>
    );
  }

  open_drawer(){
    Cache.method.call('drawer', 'open');
  }
};
