import React from 'react';
import DrawerPage from 'app/module/common/DrawerPage';

export default class extends DrawerPage{
  ord_renderMain(){
    return null;
  }

  ord_checkLoading(){
    return true;
  }

  ord_defineHeaderTitle(){
    return 'Home page';
  }
}
