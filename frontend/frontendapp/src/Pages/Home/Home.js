import Navbar from "../../Components/Navbar/Navbar";
import Products from  "../../Components/Products/Products";
import "./Home.css"
import { AuthContext } from '../../Contexts/AuthContext';
import { useContext} from 'react';


export default function Home(){
    const {logoutUser,user} = useContext(AuthContext);
    return (
        <div className="home_container">
        <Navbar
        user={user}
        logoutUser={logoutUser}
        />
        <Products/>
        </div>
    )
    
}