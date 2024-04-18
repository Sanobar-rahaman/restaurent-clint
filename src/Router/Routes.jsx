import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import DeshBord from "../Layout/DeshBord";
import Cart from "../Pages/DashBord/Cart/Cart";
import PrivateRoute from './PrivateRoute';
import AllUsers from "../Pages/DashBord/AllUsers/AllUsers";
import AddItems from "../Pages/DashBord/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBord/MangeItems/ManageItems";
import Payment from "../Pages/DashBord/Payment/Payment";
import PaymentHistory from "../Pages/DashBord/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBord/UserHome/UserHome";
import AdminHome from "../Pages/DashBord/AdminHome/AdminHome";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/order',
            element:<Order></Order>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }

      ]
    },
    {
      path:'/dashbord',
      element:<PrivateRoute><DeshBord></DeshBord></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element: <Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>

        },
        // admin routes
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },

        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);
  export default router