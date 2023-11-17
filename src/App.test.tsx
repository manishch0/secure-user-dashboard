// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { login } from './redux/auth';


test('login action should create the correct action', () => {
  const user = { id: 1, username: 'testUser' };
  const action = login(user);
  expect(action.type).toBe('auth/login');
  expect(action.payload).toEqual(user);
});
