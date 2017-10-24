import Class from '../index';
import UserData from 'app/fake/User';


describe('test data/class/User', ()=>{
  test('User class', async ()=>{
    const user = await Class.create('User', UserData);

    expect(user.format('fullName')).toBe('Jacky Li');
    expect(user.format('undefined_method')).toBeNull();
    expect(user.constructor._db.name).toBe('User');

    expect(user.format('sex')).not.toBeNull();
    expect(user.format('avatar')).not.toBeNull();
  });
});
