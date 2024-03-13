import CartItemCard from "../components/CartItemCard";
import { useDispatch, useSelector } from "react-redux";

import { ICartReducerInitialState } from '../types/cart-types';
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from "../redux/reducer/cart-slice";
import { useMemo } from "react";



// const logo = "https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_640.png";
const logo = "https://levitation.in/wp-content/uploads/2023/12/Frame-39624.svg";

const Cart = () => {

    const dispatch = useDispatch();

    const { cart: cartItems } = useSelector((state: { cartSlice: ICartReducerInitialState }) => state.cartSlice);



    const total = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cartItems]);

    const GST = 18 * total / 100;
    const GrandTotal = total + GST;



    return (
        <div className="cart h-full w-full flex flex-col gap-10 px-5 py-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 xl:py-4
            md:flex-row
            ">

            <main className="flex flex-col gap-4 md:w-2/3 px-8 py-4 bg-primary-100 rounded-md overflow-y-auto hide-scrollbar">
                {cartItems.length > 0 ? (
                    cartItems.map((i, idx) => (
                        <CartItemCard
                            incrementHandler={() => dispatch(addItemToCart(i))}
                            decrementHandler={() => dispatch(deleteItemFromCart({ _id: i._id }))}
                            removeHandler={() => dispatch(removeItemFromCart({ _id: i._id }))}
                            key={idx}
                            cartItem={i}
                        />
                    ))
                ) : (
                    <h1>No Items Added</h1>
                )}
            </main>

            <aside className="bg-primary-100 grow px-8 py-4 rounded-md flex flex-col gap-20 justify-center">

                <div className="flex  justify-center items-center">
                    <img src={logo} alt="logo" className="w-36" />
                </div>
                <div className="flex flex-col">
                    <span className="flex justify-between"><p>Total: </p><p>₹{total}</p></span>
                    <span className="flex justify-between"><p>GST: </p><p>₹{GST}</p></span>
                    <span className="flex justify-between font-bold"><p>GrandTotal: </p><p className="text-blue-400">₹{GrandTotal}</p></span>
                </div>

                {cartItems.length > 0 && <button className="bg-cyan-400 font-semibold px-3 py-2 rounded-md text-center" >Generate Invoice</button>}
            </aside>
        </div>
    );
};

export default Cart;
