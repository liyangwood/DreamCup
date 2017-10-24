import {Error} from 'app/lib';

describe('test lib/Error', ()=>{
  const tmp = __DEV__;

  test('create', ()=>{

    try{
      Error.create('a', 'info');
    }catch(e){
      expect(e.message).toBe('info');
    }

    try{
      Error.create('user', '0001', {
        username : 'milo'
      });
    }catch(e){
      expect(e.reason).toBe('0001');
    }
  });

  test('build & inspect', ()=>{
    const error = Error.build('user');
    try{
      error.format('0002', {});
    }catch(e){
      expect(error.type).toBe('user');
      const t = Error.inspect(e);

      __DEV__ = false;
      const t1 = Error.inspect(e);
      expect(t.reason).toBe('0002');
      expect(t1).toBeNull();

      __DEV__ = tmp;
    }
  });

});
