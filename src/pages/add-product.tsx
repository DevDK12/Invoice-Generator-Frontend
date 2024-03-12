import Products from "../components/Products";
import { data } from "../utils/products";




const Addproduct = () => {


    return (
        <div className="w-full h-full px-6 py-4 flex flex-col gap-4 lg:flex-row
        ">

            <main className="bg-primary-200 text-primary-txt rounded-md px-10 py-4 w-full h-full flex flex-col gap-6 relative">
                <h1 className="title lg:text-4xl">Products</h1>

                <Products
                    products={data.products}
                />
            </main>
        </div>
    )
}
export default Addproduct