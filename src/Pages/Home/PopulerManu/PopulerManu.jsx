
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import ManuItem from "../../Shared/Manuitem/ManuItem";
import useManu from "../../../Hooks/useManu";


const PopulerManu = () => {
    const[manu] = useManu();
    const populer = manu.filter(item=>item.category === 'popular')
    // const[manu,setManu] = useState([])
    // useEffect(()=>{
    //     fetch('manu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const populerData = data.filter(item=>item.category === 'popular')
    //         setManu(populerData)

    //     })
    // },[])
   
    return (
        <section className=" mb-10">
                <SectionTitle
                subHeading ={'---Check it out---'}
                heading ={'FROM OUR MENU'}
                ></SectionTitle>
                <div className=" grid md:grid-cols-2 gap-4">
                        {
                            populer.map(item=> <ManuItem key={item._id} item={item}></ManuItem>)
                        }
                </div>
                <div className=" flex justify-center items-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto">view Full manu</button>

                </div>
        </section>
    );
};

export default PopulerManu;