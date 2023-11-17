import { login } from './redux/auth';


test('login action should create the correct action', () => {
  const user = { id: 1, username: 'testUser' };
  const action = login(user);
  expect(action.type).toBe('auth/login');
  expect(action.payload).toEqual(user);
});
