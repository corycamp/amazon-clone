import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";


function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("The User is: ", authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
