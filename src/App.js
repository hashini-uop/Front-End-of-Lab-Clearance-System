import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import Payment from './Pages/DB/Payment';
import Service from './Pages/DB/Service';
import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from './Components/SideBar';
import Profile from './Pages/Profile';
import Recipt from './Pages/DB/Recipt';
import Watch from './Pages/DB/Watch';
import Admin from './Pages/Admin';
import Add from './Pages/Add';
import Login from './Components/Login';
import ChemLab from './Pages/DB/ChemLab';
import Edit from './Entity/Equipment/edit';
import View from './Entity/Equipment/view';
import History from './Entity/Payment/History';
import Register2 from './Components/Register2';
import Lab from './Entity/Labs/labs';
import ViewLab from './Entity/Labs/viewLab';
import AddLab from './Entity/Labs/addLab';
import Student from './Entity/Student/student';
import Register3 from './Components/Register3';
import LogIn3 from './Components/Login2';



function App() {

  return (
    <>
      <div className='App'>

      </div>
      <NavBar link={"/login"} name={"SignOut" } link1={"/contact"} link2={"/feedback"}
      // onClick={logOut}
      />
      <SideBar image={"./images/log-out.png"} />


      <div className='container-fluid'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Check" element={<ChemLab />} />
          <Route path="/labs" element={<Lab />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Recipt/:p_id" element={<Recipt />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/RegStudent" element={<Register3 />} />
          <Route path="/edit/:e_id" element={<Edit />} />
          <Route path="/view/:e_id" element={<View />} />
          <Route path="/History" element={<History />} />
          <Route path="/viewlab/:l_id" element={<ViewLab />} />
          <Route path="/addLab" element={<AddLab />} />
          <Route path="/editequipment/:id" element={<Edit />} />
          <Route path="/student" element={<Student />} />
          <Route path="/viewStu/:s_regNo" element={<Profile />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/adminlog" element={<LogIn3 />} />
        </Routes>


      </div>

      <div>
        <Footer />
      </div>
    </>




  );

}

export default App;



