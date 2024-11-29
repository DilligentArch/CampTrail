import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthSystem = () => {
    return (
        <div className=" bg-[#F3F3F3]">
          <header >
           <Navbar></Navbar>
          </header>
          <Outlet></Outlet>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      );
};

export default AuthSystem;