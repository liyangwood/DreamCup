import {Queue, Async} from 'app/lib';
import _ from 'lodash';


describe('test lib/Queue', ()=>{
  const q = Queue.create();
  let a = 0;
  const func_1 = async ()=>{
    a = await Async.test(()=>{
      return 1;
    });
  };
  const func_2 = async ()=>{
    a = await Async.test(()=>{
      return 2;
    });
  };

  const mock = jest.fn();


  test('add', async ()=>{
    await q.add(func_1);
    expect(a).toBe(1);

    q.stop();
    await q.add(func_2);
    await q.add(mock);
    expect(a).toBe(1);

    q.start();
    q.run();
    await Async.sleep(1200);
    expect(a).toBe(2);
    expect(mock).toHaveBeenCalled();

  });

  test('get/size/clear', async ()=>{
    q.stop();
    await q.add(func_1);
    await q.add(func_2);

    expect(q.size()).toBe(2);

    q.clear();
    expect(q.size()).toBe(0);
    expect(q.get()).toEqual([]);
  });


});
