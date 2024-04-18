import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSeceure from "../../../Hooks/useAxiosSeceure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSeceure()
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data

        }
    })
    return (
        <div>
            <h2>
                <span>Hi Welcome</span>
                {
                    user?.displayName ? user?.DisplayName : 'Back'
                }
            </h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className=" text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <FaUsers className=" text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title"> Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <FaBook className=" text-3xl"></FaBook>
                    </div>
                    <div className="stat-title">Manu Item</div>
                    <div className="stat-value">{stats.manuItems}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;