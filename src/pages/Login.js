import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const validateEmail = email => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}

const validatePassword = password => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/;
    return regex.test(password);
}

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value
        const password = passwordRef.current.value

        if (email.trim() === '') {
            alert("이메일 입력 칸에 입력이 제대로 되어 있지 않습니다.");
            return
        }
        else if (password.trim() === '') {
            alert("패스워드 입력 칸에 입력이 제대로 되어 있지 않습니다.");
            return
        }
        else if (!validateEmail(email)) {
            alert("이메일 형식에 맞게 작성하십시오");
            return
        }
        else if (!validatePassword(password)) {
            alert("최소 8자, 하나 이상의 문자와 숫자를 포함하여 작성하십시오");
            return
        }

        try {
            const response = await axios.get('http://localhost:3001/profile');
            const error = new Error("회원 정보에 이메일이 존재하지 않거나 틀린 비밀번호입니다.")
            if (response?.data?.length !== 0) {
                for (let data of response.data) {
                    if (email === data.email && password === data.password) {
                        navigate('/mypage', {
                            state: { isLoggined: true, email: email, password: password }
                        });
                        break
                    }
                    else {
                        throw error
                    }
                }
            }
            else {
                throw error
            }
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <section className="h-screen bg-orange-400 flex flex-col items-center sm:h-full md:h-screen">
            <div className="items-center mx-auto my-10">
                <h1 id="h1" className="text-8xl font-bold text-sky-300 text-center">
                    Sign In
                </h1>
            </div>
            <div className="container px-8 py-12 bg-sky-300 rounded-lg p-5 m-auto">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <header className="sm:w-10/12 md:w-6/12 lg:w-4/12 mb-10 md:mb-0">
                        <img className="min-w-full min-h-full mb-5"
                            alt="사진"
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" />
                    </header>

                    <div className="flex-wrap md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form>

                            <div>
                                <label className="block mb-1 text-indigo-500" htmlFor="emailAdress">Email adress</label>
                                <input id="email" ref={emailRef} alt="" className="w-full rounded p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="text" email="emailAdress" placeholder="Email adress" />
                            </div>

                            <div>
                                <label className="block mb-1 text-indigo-500" htmlFor="password">Password</label>
                                <input id="password" ref={passwordRef} alt="" className="w-full rounded p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="password" name="password" placeholder="Password" />
                            </div>

                            <button
                                type="submit"
                                className="inline-block mb-2 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring focus:ring-yellow-600 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={event => submit(event)}
                            >
                                Sign in
                            </button>

                            <div
                                className="flex items-center my-3 before:flex-1 before:border-t before:border-indigo-300 before:mt-0.5 after:flex-1 after:border-t after:border-indigo-300 after:mt-0.5">
                            </div>

                            <footer>
                                {/* href 속성이 유효하지 않아서 href의 값을 #에서 #!로 바꿈 */}
                                <a className="text-indigo-700 hover:text-pink-700 text-sm float-left m-2" href="#!">Forgot Password?</a>
                                <Link to="/signup" className="text-indigo-700 hover:text-pink-700 text-sm float-right m-2" href="#!">Create Account</Link>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
