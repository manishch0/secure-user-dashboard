import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth';
import  ApiService  from '../Service/ApiService';



const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = async () => {
    try {
      const user = await ApiService.signUp(email, password);
      dispatch(login({ id: user.id, username: user.email }));
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
