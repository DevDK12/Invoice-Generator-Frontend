import { FormEvent, useState } from "react";
import Input from "../../components/ui/Input"
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRegisterUserMutation } from "../../redux/api/userApi";
import { ICustomError } from "../../types/api-types";









const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [registerUser] = useRegisterUserMutation();


    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            name,
            email,
            password,
        }

        try {

            const response = await registerUser(user);

            if ('error' in response) {
                const err = response.error;
                if ('data' in err) {
                    throw err.data;
                }
                throw err;
            }

            const { status, message } = response.data;
            if (status === 'success') {
                toast.success(message);
                navigate('/login');
            }

        }
        catch (error) {
            const err = error as ICustomError;
            toast.error(err.message);
        }
    };





    return (
        <div className="h-screen py-4 grid place-items-center
        px-8 md:px-20
        ">

            <main className="bg-red-200 rounded-lg w-full flex flex-col lg:flex-row xl:w-3/4">
                <aside className="login-cover  relative rounded-t-lg lg:rounded-l-lg bg-top min-h-[200px] xs:bg-no-repeat xs:bg-[center_top_-6rem] sm:bg-[center_top_-8rem] md:bg-[center_top_-12rem] lg:bg-center flex-1 ">
                    <div className="absolute inset-0 cover-gradient opacity-30"></div>
                </aside>

                <div className="grid place-items-center rounded-b-lg lg:rounded-r-lg flex-1 py-3 lg:py-10  bg-gray-200">
                    <div className="flex flex-col gap-3">

                        <form
                            onSubmit={submitHandler}
                            className="flex flex-col gap-2 sm:gap-4 lg:gap-4"
                        >
                            <h1 className="title lg:text-3xl mb-7">Create New Account</h1>

                            <Input
                                type="text"
                                placeholder="John Doe"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Input
                                type="email"
                                placeholder="test@email.com"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                type="Password"
                                placeholder="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="lg:pl-32 grid place-items-center mt-8">

                            </div>
                            <div className="lg:pl-32 grid place-items-center gap-2 mt-8">
                                <button className="bg-cyan-400 text-white font-semibold text-sm w-2/5 mx-auto py-1 rounded-md"
                                    type="submit">
                                    Signup
                                </button>
                                <p className="mx-auto text-xs">OR</p>
                                <p className="mx-auto text-xs">Already Registered? <Link className="text-blue-600 underline" to="/login">Login now</Link></p>
                            </div>
                        </form>


                    </div>
                </div>

            </main>

        </div>
    )
}
export default Signup