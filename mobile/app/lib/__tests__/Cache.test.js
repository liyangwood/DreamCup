import {Cache} from 'app/lib';

describe('test lib/Cache', ()=>{
  const func = (x, y)=>y+'a'+x;

  Cache.method.register('f', func);

  test('call', ()=>{
    const rs = Cache.method.call('f', 1, 2);
    expect(rs).toBe('2a1');
  });

  test('apply', ()=>{
    const rs = Cache.method.apply('f', [2, 3]);
    expect(rs).toBe('3a2');
  });

  test('valid key', ()=>{
    expect(()=>{
      Cache.method.call('g', 1);
    }).toThrow();
  });
});
