import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useLatestProductsQuery } from "../redux/api/productApi";
import { ErrorResponse } from "../types/api-types";
import toast from "react-hot-toast";
// import {data} from '../utils/products';


const Home = () => {

    const { data, isError, isLoading, isSuccess, error } = useLatestProductsQuery();


    let products;
    if (isError) {
        const err = error as ErrorResponse;
        toast.error(err.data.message);
    }
    if (isLoading) {
        products = <p>Loading products...</p>
    }
    if (isSuccess) {
        const {  data: { products: latestProducts } } = data;
        products = <Products products={latestProducts} />
    }


    return (
        <div className="flex flex-col gap-24 overflow-auto hide-scrollbar h-full w-full 
            px-5 py-4 xs:px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 xl:py-4"
        >
            <section className="w-full h-[18.75rem">
                <div className="cover-image h-[18.75rem] rounded-md"></div>
            </section>

            <section className="px-4 py-2 flex flex-col gap-12">
                <div className="flex justify-between items-baseline">
                    <h1 className="title lg:text-4xl lg:tracking-wide lg:font-normal">Latest Products</h1>
                    <Link to="/add-product" className="subtitle lg:text-lg underline">
                        More
                    </Link>
                </div>
                {products}
            </section>

        </div>
    );
};

export default Home;
