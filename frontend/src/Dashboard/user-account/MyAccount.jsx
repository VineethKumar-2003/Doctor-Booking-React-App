import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import userImg from '../../assets/data/Images/doctor-img01.png';

import MyBookings from "./MyBookings";
import Profile from "./Profile";

import useGetProfile from '../../hooks/useFetchData';
import { BASE_URL } from "../../config";

import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

const MyAccount = () => {
    const { dispatch } = useContext(AuthContext);
    const [tab, setTab] = useState('bookings');
    
    const { 
        data: userData, 
        loading, 
        error 
    } = useGetProfile(`${BASE_URL}/api/v1/users/profile/me`);

    console.log(userData, "userdata");

    // Destructuring userData to prevent repeated checks and make rendering cleaner
    const { name = "User", email = "example@gmail.com", bloodType = "o-" } = userData || {};

    useEffect(() => {
        if (error) {
            toast.error(error); // Show an error if there is an issue fetching the profile
        }
    }, [error]);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">

                {loading && !loading && <Loading />}

                {error && !loading && <Error errMessage={error} />}

                {!loading && !error && (
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="pb-[50px] px-[30px] rounded-md">
                        <div className="flex items-center justify-center">
                            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                <img 
                                    src={userImg} 
                                    alt="User Profile" 
                                    className="w-full h-full rounded-full" 
                                />
                            </figure>
                        </div>

                        <div className="text-center mt-4">
                            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                {name}
                            </h3>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                {email}
                            </p>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                Blood Type: 
                                <span className="ml-2 text-headingColor text-[22px] leading-8">
                                    {bloodType}
                                </span>
                            </p>
                        </div>

                        <div className="mt-[50px] md:mt-[100px]">
                            <button 
                                onClick={handleLogout} 
                                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
                                Logout
                            </button>
                            <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                                Delete account
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:px-[30px]">
                        <div>
                            <button 
                                onClick={() => setTab("bookings")} 
                                className={`${tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : ''} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            >
                                My Bookings
                            </button>

                            <button 
                                onClick={() => setTab("settings")} 
                                className={`${tab === 'settings' ? 'bg-primaryColor text-white font-normal' : ''} p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            >
                                Profile Settings
                            </button>
                        </div>

                        {loading && <div>Loading profile...</div>}
                        {!loading && error && <div>Error: {error}</div>}
                        {tab === 'bookings' && <MyBookings />}
                        {tab === 'settings' && <Profile />}
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default MyAccount;
