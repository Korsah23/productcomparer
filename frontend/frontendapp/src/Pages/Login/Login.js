import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
//import axios from 'axios';
import { AuthContext } from '../../Contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loginUser,user,logoutUser} = useContext(AuthContext);
  const navigate = useNavigate()
  function handleUsernameChange(event) {
    setUsername(event.target.value);
    
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    
  }
  
  function handleSubmit(event){
    loginUser(event,navigate);
    //console.log("HUH")
  }



  return (
    <>
    <Navbar
    user={user}
    logoutUser={logoutUser}
    />
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
