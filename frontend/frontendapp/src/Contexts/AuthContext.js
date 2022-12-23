import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom"



export  const AuthContext = createContext();

const AuthContextProvider = (props) => { 
    
    const [authTokens,setAuthTokens] = useState(() =>localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null);
    const [user, setUser] = useState(() =>localStorage.getItem("authTokens")?jwt_decode(localStorage.getItem("authTokens")):null);
    const [loading,setLoading] = useState(true)

    const loginUser = (e,navigate) => {
        e.preventDefault();
        
        
        axios.post("http://127.0.0.1:8000/api/token/",{username:e.target.username.value
        ,password:e.target.password.value})
        .then(response => {
          console.log(response.data)
          if(response.status===200){
            setAuthTokens(response.data)
            setUser(jwt_decode(response.data.access))
            localStorage.setItem("authTokens",JSON.stringify(response.data))
            navigate("/");
          }
        })
        .catch((error => {
          console.log(error)
        }))
        
    }

    const logoutUser = ()=>{
     // e.preventDefault();
      setAuthTokens(null)
      setUser(null)
      localStorage.removeItem("authTokens")
      //navigate("/");
    }

    const updateToken= ()=> {
      console.log("Token Updated")
      axios.post("http://127.0.0.1:8000/api/token/refresh/",{"refresh":authTokens.refresh})
        .then(response => {
          console.log(response.data)
          if(response.status===200){
            setAuthTokens(response.data)
            setUser(jwt_decode(response.data.access))
            localStorage.setItem("authTokens",JSON.stringify(response.data))
            //navigate("/");
          }else{
            logoutUser();
          }
        })
        .catch((error => {
          console.log(error)
        }))
    }

    useEffect(()=> {
      const interval = setInterval(() =>{
        if(authTokens){
          updateToken();
        }
      },1000*60*4)
      return ()=> clearInterval(interval)
    },[authTokens,loading])




    const contextData = {
        loginUser:loginUser,
        user:user,
        authTokens:authTokens,
        logoutUser:logoutUser,
    };
    return(
    <AuthContext.Provider value = {contextData}>
        {props.children}
    </AuthContext.Provider>
    );
}
export default AuthContextProvider;
