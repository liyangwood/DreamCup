import KG, {_} from 'kg';
import {Platform} from 'react-native';
import Light from './Light';

const common = {
  $statusBarHeight : Platform.OS === 'ios' ? 20 : 0,
  $gap : 15
};

const _class = {
  '_gapLR_' : {
    paddingLeft: '$gap',
    paddingRight: '$gap'
  }
};

_.each(_class, (value, key)=>{
  KG.Style.set(key, value);
});

export default {
  ...common,

  ...Light
};
