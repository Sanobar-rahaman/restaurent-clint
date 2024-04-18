import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ManuItem from "../../Shared/Manuitem/ManuItem";


const ManuCatagory = ({items,title,coverImg}) => {
    return (
        
        <div className=" pt-8">
            { title &&<Cover img={coverImg} title ="Our Manu"></Cover>}
            <div className=" grid md:grid-cols-2 gap-4 mb-10">
                        {
                            items.map(item=> <ManuItem key={item._id} item={item}></ManuItem>)
                        }
                </div>
                <div className=" flex justify-center mb-6">
                <Link to='/order'>
                <button className=" btn btn-outline border-0 border-b-4">order Now</button>
                </Link>
                </div>
        </div>
    );
};

export default ManuCatagory;