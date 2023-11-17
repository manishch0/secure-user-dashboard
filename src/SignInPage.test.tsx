import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInPage from './Pages/SignIn';
import { Provider } from 'react-redux';
import store from './redux/store'; 

jest.mock('./Service/ApiService.ts', () => ({

  __esModule: true,
  default: {
    signIn: jest.fn(() => Promise.resolve({ id: 1, email: 'test@example.com' })),
  },
}));

test('renders the Sign In page', () => {
  render(
    <Provider store={store}>
      <SignInPage />
    </Provider>
  );

  expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('allows users to sign in', async () => {
  render(
    <Provider store={store}>
      <SignInPage />
    </Provider>
  );

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const signInButton = screen.getByText('Sign In');

  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password');
  fireEvent.click(signInButton);

  await waitFor(() => {
    expect(screen.getByText('Welcome, test@example.com!')).toBeInTheDocument();
  });
});
