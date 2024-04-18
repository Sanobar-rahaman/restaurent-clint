import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import image from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8">
            <SectionTitle
            subHeading ={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className=" md:flex justify-center items-center py-20 px-36">
            <div>
                <img src={image} alt="" />
            </div>
            <div className=" md:ml-10">
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className=" btn btn-outline border-0 border-b-4">Read more</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;