import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";


const PaymentHistory = () => {
    const{user} = useAuth()
    const axiosSecure = useAxiosSeceure()

    const {data:payments=[]} = useQuery({
        queryKey:['payments',user.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`payments/${user.email}`)
            return res.data;
        }
       
    })
    console.log(payments);
    return (
        <div>
            <h2 className=" text-3xl text-center"> ToTal Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
      payments.map((payment,idx)=><tr key={payment._id}>
        <th>{idx+1}</th>
        <td>{payment.price}</td>
        <td>{payment.transectionId}</td>
        <td>{payment.status}</td>
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

export default PaymentHistory;