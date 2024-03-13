import React from "react";
import { Vector5, analytic, logo, menuIcon1, menuIcon2 } from "../../../assets/loginsignUp/const";
import MainAdminNav from "./mainAdminNav";
import MainAdminManager from "./mainAdminManage";

const MainAdminpage = () => {
    return (
        <div className="p-5 flex     ">
            {/* top white piece */}
            <div className="bg-white w-[30%] h-auto px-4 py-3 rounded-xl">
                {/* logo */}
                <div className="flex items-center justify-center mt-8 mb-40">
                    <p className="text-black">
                        <span className="text-4xl font-semibold"> HF</span>
                        <span className="text-2xl font-semibold">finder</span>
                    </p>
                </div>
                {/* user data */}
                <div className="flex items-center gap-2">
                    {/* user icon */}
                    <div>
                        <img src={logo} alt="image" />
                    </div>
                    {/* user name */}
                    <div>
                        <p className="font-bold text-2xl ">Byiringiro Moise</p>
                        <div className="flex items-center gap-1">
                            <div className="w-[20px] h-[10px] rounded-md bg-[#F46A06]"></div>
                            <p className="text-[#00000099] text-sm">System Admin</p>
                        </div>
                    </div>
                </div>
                {/* menu category */}
                <div className="flex flex-col justify-start">
                    {/* first */}
                    <div className="flex mt-7 items-center  gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
                        <img src={menuIcon1} alt="image" />
                        <p className="text-xl">Item List</p>
                    </div>
                    <div className="flex mt-7 items-center  gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
                        <img src={menuIcon2} alt="image" />
                        <p className="text-xl">Order List</p>
                    </div>
                    <div className="flex mt-7 items-center  gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
                        <img src={analytic} alt="image" />
                        <p className="text-xl">Manage Payments</p>
                    </div>
                    <div className="flex mt-7 items-center mb-6 gap-2 p-2 rounded-xl hover:bg-[#ccc] hover:cursor-pointer select-none">
                        <img className="w-12" src={Vector5} alt="image" />
                        <div className="flex flex-col">
                            <p className="text-xl">Transportation Summary</p>
                            <p className="text-sm">My Profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full ml-5 mt-10">
                <MainAdminNav />
                <MainAdminManager/>
            </div>
        </div>
    );
};
export default MainAdminpage;