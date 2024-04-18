import { useQuery } from "@tanstack/react-query";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import swal from "sweetalert";


const AllUsers = () => {
    const axiosSeceure = useAxiosSeceure()
    const {data: users =[],refetch} = useQuery({
        queryKey: ['users'],
        queryFn:async ()=>{
            const res = await axiosSeceure.get('/users')
            return res.data

        }
    })
    const handleDelete = user =>{
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
              
                axiosSeceure.delete(`users/${user._id}`)
                .then(res=>{
                    refetch()
                    if(res.data.deletedCount>0){
                          Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                    }
                })
            }
        });
    }
    const handleMakeAdmin = (user) =>{
        console.log(user);
        axiosSeceure.patch(`users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch()
                swal("Good job!", "User updated as admin!", "success");

            }
        })
    }
    return (
        <div>
            <div className=" flex justify-evenly my-4">
                <h2 className=" text-3xl"> all Users</h2>
                <h2 className=" text-3xl">Total Users {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,idx)=><tr key={user._id}>
            <th>{idx+1}</th>
            <td>{user?.name}</td>
            <td>{user.email}</td>
            <td>
            {user.role === 'admin'? 'Admin' :
                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs text-3xl"><FaUsers className=" text-blue-400"></FaUsers> </button>
                }
            </td>
            <td>
            <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-3xl"><FaTrash className=" text-red-400"></FaTrash> </button>
            </td>
          </tr>)
      }
      
      {/* row 2 */}
      
      {/* row 3 */}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;