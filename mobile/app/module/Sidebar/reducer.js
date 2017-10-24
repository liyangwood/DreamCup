import type from './constant';
import config from 'app/config/sidebar';

const default_state = {
  nav_list : config.list,
  nav_nl_list : config.nl_list,
  nav : ''
};

export default (state=default_state, action)=>{

  return state;
};
