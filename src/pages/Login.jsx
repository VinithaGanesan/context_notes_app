import React from 'react'
import { useAuthentication } from '../Contexts/Authentication.Context'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { loggedIn, setLoggedIn } = useAuthentication();
  
  const navigate = useNavigate();



  return (
    <div>
      <button onClick={() => {
                setLoggedIn(true);
                navigate('/app/home');
              }}>
        Login
      </button>
    </div>
  )
}
