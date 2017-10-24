import React from 'react';
import { action, storiesOf } from '@storybook/react-native';
import SidebarComponent from '../SidebarComponent';

storiesOf('module/Sidebar', module)
.add('Base', ()=>{
  const p = {};

  return (
    <SidebarComponent {...p} />
  );
});
