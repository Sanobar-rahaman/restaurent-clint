import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import manuImg from "../../assets/menu/manu-bg.png"
import manuImg2 from "../../assets/menu/dessert-bg.jpeg"
import manuImg3 from "../../assets/menu/salad-bg.jpg"
import manuImg4 from "../../assets/menu/soup-bg.jpg"
import useManu from '../../Hooks/useManu';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import ManuCatagory from './ManuCategory/ManuCatagory';



const Menu = () => {
    const[manu] = useManu()
    const desserts = manu.filter(item=>item.category === 'dessert')
    const soup = manu.filter(item=>item.category === 'soup')
    const salad = manu.filter(item=>item.category === 'salad')
    const pizza = manu.filter(item=>item.category === 'pizza')
    const offered = manu.filter(item=>item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manu </title>
            </Helmet>
            <Cover img={manuImg} title ="Our Manu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading = "Don't Miss" heading = "Today's Offer" ></SectionTitle>
            {/* offered manu item */}
            <ManuCatagory items ={offered} ></ManuCatagory>
            {/* desert  manu item */}
            <Cover img={manuImg2} title ="Dessert"></Cover>
            <SectionTitle subHeading = "Don't Miss" heading = "Dessert" ></SectionTitle>
            <ManuCatagory items ={desserts} ></ManuCatagory>
            {/* pizza manu item */}
            <Cover img={manuImg} title ="Pizza"></Cover>
            <SectionTitle subHeading = "Don't Miss" heading = "Pizza" ></SectionTitle>
            <ManuCatagory items ={pizza} ></ManuCatagory>
            {/* salad manu item  */}
            <Cover img={manuImg3} title ="Salad"></Cover>
            <SectionTitle subHeading = "Don't Miss" heading = "Salad" ></SectionTitle>
            <ManuCatagory items ={salad}></ManuCatagory>
            {/* soup item manu */}
            <Cover img={manuImg4} title ="Soup"></Cover>
            <SectionTitle subHeading = "Don't Miss" heading = "Soup" ></SectionTitle>
            <ManuCatagory items ={soup} ></ManuCatagory>
        </div>
    );
};

export default Menu;