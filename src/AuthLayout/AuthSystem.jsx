import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthSystem = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
          <header className="py-3 w-11/12 mx-auto">
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