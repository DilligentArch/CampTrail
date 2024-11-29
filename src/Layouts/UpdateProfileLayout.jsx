import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UpdateProfile from "../components/UpdateProfile";


const UpdateProfileLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <UpdateProfile></UpdateProfile>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfileLayout;