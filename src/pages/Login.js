import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <section className="flex h-screen ">
        
        <div className="container px-8 py-12 bg-sky-300 rounded-lg p-5 m-auto">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <header className="sm:w-10/12 md:w-6/12 lg:w-4/12 mb-10 md:mb-0">
                    <img className="min-w-full min-h-full mb-5"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" />
                </header>
        
                <div className="flex-wrap md:w-8/12 lg:w-5/12 lg:ml-20">
                    <form>
                        
                        <div>
                            <label className="block mb-1 text-indigo-500" for="emailAdress">Email adress</label>
                            <input alt="" className="w-full rounded p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                                type="text" email="emailAdress" placeholder="Email adress"/>
                        </div>
                        
                        <div>
                            <label className="block mb-1 text-indigo-500" for="password">Password</label>
                            <input alt="" className="w-full rounded p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                                type="password" name="password" placeholder="Password"/>
                        </div>
                        
                        <button
                            type="submit"
                            className="inline-block mb-2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring focus:ring-yellow-600 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign in
                        </button>

                        <div
                            className="flex items-center my-3 before:flex-1 before:border-t before:border-indigo-300 before:mt-0.5 after:flex-1 after:border-t after:border-indigo-300 after:mt-0.5">
                        </div>

                        <footer>
                            <a className="text-indigo-700 hover:text-pink-700 text-sm float-left m-2" href="#">Forgot Password?</a>
                            <a className="text-indigo-700 hover:text-pink-700 text-sm float-right m-2" href="#">Create Account</a>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Login;
