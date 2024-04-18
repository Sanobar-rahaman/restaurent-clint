import { FaEdit, FaTrash } from "react-icons/fa";
import useManu from "../../../Hooks/useManu";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";


const ManageItems = () => {
    const[menu] = useManu(); 
    const axiosSeceure = useAxiosSeceure()

    const handleDeleteItem = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSeceure.delete(`menu/${item._id}`)
            //   console.log(res.data);
            if(res.data.deletedCount>0){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

          
            }
          });
    }
    return (
        <div>
            <SectionTitle heading='Mange All Items' subHeading="Herry Up"></SectionTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,idx)=> <tr key={item._id}>
            <td>
              {idx+1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td>${item.price}</td>
            <td>
              <button className=" text-3xl text-green-500"><FaEdit></FaEdit></button>
            </td>
            <td>
            <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-xs text-3xl"><FaTrash className=" text-red-400"></FaTrash> </button>
            </td>
          </tr>)
      }
     
      {/* row 2 */}
      
      {/* row 3 */}
      
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;