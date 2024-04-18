import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Fearured/Featured";
import PopulerManu from "./PopulerManu/PopulerManu";
import TestiMonials from "./Testimonials/TestiMonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerManu></PopulerManu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;