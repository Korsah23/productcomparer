import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name:'',
    location:'',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/user/",formData)
    .then(response => {
      console.log(response);
    })
    .catch(error =>{
      console.log(error)
      
    }) 
    navigate('/login')
    // submit the form data to the server here
  };
  

  return (
    <>
    <Navbar/>
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="papasPizza"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='jane@gmail.com'
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Papa's Pizza"
        />
      </div>
      <div className="form-group">
        <label htmlFor="locaton">Compay's Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder='Accra'
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Sign Up
      </button>
    </form>
    </>
  );
}

export default Signup;
