import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const{user} = useAuth()
    return (
        <div>
            <h2 className=" text-3xl">
                <span>Hi Welcome</span>
                {
                    user?.dIsplayName ? user?.displayName :"Back"
                }
            </h2>
        </div>
    );
};

export default UserHome;