import {constants, createContainer, md5, Async, uuid} from 'app/lib';

describe('test lib/index', ()=>{
  test('constants', ()=>{
    expect(constants('a', 'b', ['c'])).toEqual({
      c : 'a/b/c'
    });
  });

  test('createContainer', ()=>{

    expect(createContainer('a', {b:1}, {c:1})).toEqual({
      state : {b:1},
      map : {c:1},
      component : 'a'
    });

  });

  test('md5', ()=>{
    expect(md5('ihealth')).toBe('5aa1cbca4fb0963f1478545bc8d6d842');
  });

  test('uuid', ()=>{
    expect(uuid()).not.toBe(uuid());
  });

  test('Async.test resolve', async ()=>{
    const fn = ()=>'a';
    const rs = await Async.test(fn);
    expect(rs).toBe('a');
  });

  test('Async.test reject', async ()=>{
    const fn = ()=>'';
    try{
      await Async.test(fn, 'error');
    }catch(e){
      expect(e).toBe('error');
    }
  });

  test('Async.method', async ()=>{
    const rs = await Async.method((callback)=>{
      callback('a', null);
    }, [true, false]);
    expect(rs).toBe('a');

    try{
      const err = await Async.method((callback)=>{
        const error = new Error('test error');
        callback(error, null);
      });
    }catch(e){
      expect(e.message).toBe('test error');
    }

  });

});
