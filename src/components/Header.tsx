import { Link, NavLink } from "react-router-dom";
import {
    FaShoppingBag,
    FaSignInAlt,
} from "react-icons/fa";
import { useState } from "react";
import Avatar from "./ui/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { IUserReducerInitialState } from "../types/user-types";
import { deleteUser } from "../redux/reducer/user-slice";
import toast from "react-hot-toast";








// const url = "https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_640.png";
const url = "https://levitation.in/wp-content/uploads/2023/12/Frame-39624.svg";






const Header = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state: { userSlice: IUserReducerInitialState }) => state.userSlice);


    const [isOpen, setIsOpen] = useState<boolean>(false);

    const logoutHandler = async () => {
        dispatch(deleteUser());
        localStorage.clear();
        toast.success('User logout successfully');
    };

    return (
        <nav className="flex justify-between px-8 py-4 w-full bg-primary-100">
            <div className="flex  justify-center items-center">
                <Link className="flex items-center gap-3" to={"/"}>
                    <img src={url} alt="logo" className="min-w-[120px] w-32" />
                </Link>
            </div>
            <ul className="header flex justify-end items-center gap-4 xs:gap-7 sm:gap-10">
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-500" : "hover:text-cyan-200"} to={"/"}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-500" : "hover:text-cyan-200"} to={"/add-product"}>
                        Add product
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-500" : "hover:text-cyan-200"} to={"/cart"}>
                        <FaShoppingBag />
                    </NavLink>
                </li>
                <li>
                    {user?._id ? (
                        <>
                            <Avatar
                                className="w-8 h-8"
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp'
                                onAvatar={() => setIsOpen(prev => !prev)}
                            />
                            <dialog open={isOpen} >
                                <div className="bg-primary-100 text-primary-txt flex flex-col px-6 py-4 gap-5 fixed top-20 right-14 rounded-2xl rounded-tr-none min-w-[250px]">
                                    <p >{user.name}</p>
                                    <p >{user.email}</p>
                                    <button
                                        className="bg-cyan-200 w-2/3 rounded-md px-2 py-1 text-cyan-700 font-bold"
                                        onClick={logoutHandler}
                                    >
                                        Singout
                                    </button>
                                </div>
                            </dialog>
                        </>
                    ) : (
                        <Link to={"/signup"}>
                            <FaSignInAlt />
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Header;
