import {Log} from 'app/lib';

describe('test lib/Log', ()=>{
  const _log = Log.create();

  test('info', ()=>{
    expect(_log.info('test info')).not.toBeDefined();
  });

  test('sign', ()=>{
    expect(_log.sign('test sign')).not.toBeDefined();
  });

});
