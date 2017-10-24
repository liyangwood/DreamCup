import Base from '../Base';

describe('test data/class/Base', ()=>{
  Base._db = {
    gen : (id)=>{
      if(id==='id'){
        return {
          id:'id',
          a:2
        }
      }
      else{
        return null;
      }
    }
  };


  test('toData', ()=>{
    const o = new Base({id:1});

    expect(o.toData()).toEqual({id:1});
  });

  test('invalid constructor', async ()=>{
    const o = new Base();
    expect(o.id).toBe('');
  });

  test('setData', ()=>{
    const o = new Base();
    o.setData({b:2});
    expect(o.get('b')).toBe(2);

    o.setData({id:'aa'});
    expect(o.get('id')).toBe('aa');
  });

  test('gen', async ()=>{
    const o = new Base({id:1});
    const rs = await o.gen('1');
    expect(rs).toBe(null);

    const x = await o.gen('id');
    expect(x.get('a')).toBe(2);
  });
});
