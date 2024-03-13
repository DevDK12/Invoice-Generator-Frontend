import ProductCard from "./ProductCard"

import { ProductType } from "../utils/products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/reducer/cart-slice";




interface ProductsProps {
    products: ProductType[],
}

const Products = ({ products }: ProductsProps) => {

    const dispatch = useDispatch();


    const handleAddToCart = (product: ProductType) => {
        dispatch(addItemToCart({
            _id: product._id,
            name: product.name,
            price: product.price,
            photo: product.photo,
            quantity: 1,
        }))
    }

    return (

        <main className="grid place-items-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-20">
            {
                products?.map((i) => (
                    <ProductCard
                        key={i._id}
                        name={i.name}
                        price={i.price}
                        handler={() => handleAddToCart(i)}
                        photo={i.photo}
                    />
                ))
            }
        </main>
    )
}
export default Products