import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSeceure = useAxiosSeceure()
    const onSubmit =async(data) => {
        console.log(data)
        // image upload to imagebb and  get the url
        const imageFile = { image: data.image[0] }
        
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem ={
                name:data.name,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSeceure.post('/menu',menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
        
    }
    return (
        <div>
            <SectionTitle heading='add an items' subHeading='whats new' ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name?</span>
                        </label>
                        <input type="text" {...register('name',{required:true})} placeholder="Recipe Name" className="input input-bordered w-full " />

                    </div>
                    <div className=" flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category?</span>
                            </label>
                            <select defaultValue="default" {...register('category',{required:true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>

                            </select>

                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register('price',{required:true})} placeholder="Price" className="input input-bordered w-full " />

                        </div>
                        
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>
                                
                            </label>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                            
                        </div>
                        <div className=" form-control w-full my-6">
                        <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                        </div>

                    <button className=" btn">
                    <FaUtensils></FaUtensils> Add Items 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;