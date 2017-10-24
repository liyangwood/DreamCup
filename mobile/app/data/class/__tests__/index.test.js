import Class from '../index';

describe('test data/class/index', ()=>{
  test('invalid class name', ()=>{
    expect(()=>{
      Class.create('undefined_class_name');
    }).toThrow();
  });

});
