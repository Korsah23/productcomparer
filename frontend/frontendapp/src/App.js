import { RouterProvider} from "react-router-dom";
import './App.css';

import AuthContextProvider from "./Contexts/AuthContext";

import router from './Utils/Router';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

      <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
