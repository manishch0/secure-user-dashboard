import ApiService from './Service/ApiService';


test('fetchUserData should return user data', async () => {
  const userId = 1;
  const userData = await ApiService.fetchUserData(userId);
  expect(userData).toBeDefined();
});
