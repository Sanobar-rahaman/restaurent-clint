import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFotter = location.pathname.includes('login')
    return (
        <div>
           { noHeaderFotter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFotter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;