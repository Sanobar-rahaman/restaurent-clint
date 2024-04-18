import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";



import useAxiosSeceure from "../../Hooks/useAxiosSeceure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const{image,price,name,recipe,_id} = item
    const{user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosScceure = useAxiosSeceure()
    const[refetch] = useCart()
    // const axisSecure = useAxiosSeceure()
    const handleaddToCurt = () =>{
        if(user && user.email){
            const cartItem  = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price

            }
            axiosScceure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    swal("Good job!", "Data added to cart!", "success");
                }
                refetch()
            })
        }
        else{
            swal("Sorry!", "Please login", "error");
            navigate('/login',{state:{from: location}})
        }
        
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=" bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleaddToCurt} className="btn btn-outline border-0 border-b-4 mt-4 mx-auto">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;