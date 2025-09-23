
import { Routes, Route } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
//import Notfound from "../pages/Notfound";

export default function AppRouter() {
  return (
    
      <Routes>
        <Route element={<App />} >
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />}/>
        </Route>
        {/* <Route path="about" element={<About />}/> */}
        {/* <Route path="*" element={<Notfound />}/> */}
      </Routes>
    
  );
}
