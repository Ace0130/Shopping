import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen bg-sky-300 flex-col">
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded-lg p-5">
                <header>
                    <img
                        className="min-w-full mx-auto mb-5"
                        alt="login"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    />
                </header>

                <form>
                    <div>
                        <label className="block mb-1 text-indigo-500" htmlFor="emailAdress">
                            Email adress
                        </label>
                        <input
                            className="w-full rounded p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="text"
                            email="emailAdress"
                            placeholder="Email adress"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-indigo-500" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full rounded p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-block mb-2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={() => {
                            navigate("/signin");
                        }}
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center my-3 before:flex-1 before:border-t before:border-indigo-300 before:mt-0.5 after:flex-1 after:border-t after:border-indigo-300 after:mt-0.5"></div>

                <footer>
                    <a
                        className="text-indigo-700 hover:text-pink-700 text-sm float-left"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                    <a
                        className="text-indigo-700 hover:text-pink-700 text-sm float-right"
                        href="#"
                    >
                        Create Account
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Login;
