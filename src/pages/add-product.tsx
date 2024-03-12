import toast from "react-hot-toast";
import Products from "../components/Products";
import { useAllProductsQuery } from "../redux/api/productApi";
import { ErrorResponse } from "../types/api-types";




const Addproduct = () => {

    const { data, isError, isLoading, isSuccess, error } = useAllProductsQuery();


    let products;
    if (isError) {
        const err = error as ErrorResponse;
        toast.error(err.data.message);
    }
    if (isLoading) {
        products = <p>Loading products...</p>
    }
    if (isSuccess) {
        const { data: { products: allProducts } } = data;
        products = <Products products={allProducts} />
    }




    return (
        <div className="w-full h-full px-6 py-4 flex flex-col gap-4 lg:flex-row
        ">

            <main className="bg-primary-200 text-primary-txt rounded-md px-10 py-4 w-full h-full flex flex-col gap-6 relative">
                <h1 className="title lg:text-4xl">Products</h1>
                {products}
            </main>
        </div>
    )
}
export default Addproduct