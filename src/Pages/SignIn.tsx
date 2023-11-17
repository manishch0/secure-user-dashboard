import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth';

import  ApiService  from '../Service/ApiService';
import { useNavigate } from 'react-router-dom'; 

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await ApiService.signIn(email, password);
      dispatch(login({ id: user.id, username: user.email }));
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;
