import { login, logout } from '../../actions/auth';

test('Should generate login action object', () => {
  const uid = 'test123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});


test('Should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});

