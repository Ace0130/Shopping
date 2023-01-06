import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validateEmail = email => {
    const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}

const validatePassword = password => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/;
    return regex.test(password);
}

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (name.trim() === '') {
            alert('이름 입력 칸에 입력이 제대로 되어 있지 않습니다.');
            return;
        } else if (email.trim() === '') {
            alert('이메일 입력 칸에 입력이 제대로 되어 있지 않습니다.');
            return;
        } else if (password.trim() === '') {
            alert('패스워드 입력 칸에 입력이 제대로 되어 있지 않습니다.');
            return;
        } else if (!validateEmail(email)) {
            alert('이메일 형식에 맞게 작성하십시오');
            return;
        } else if (!validatePassword(password)) {
            alert('최소 8자, 하나 이상의 문자와 숫자를 포함하여 작성하십시오');
            return;
        }

        try {
            const hasUser = await axios.get(`http://localhost:3001/profile?email=${email}`);
            if (hasUser?.data?.length > 0) {
                throw new Error('회원정보에 이미 존재하는 이메일입니다.');
            }

            await axios.post('http://localhost:3001/profile', {
                name: name,
                email: email,
                password: password,
            });
            navigate('/mypage', {
                state: { isLoggined: true },
            });
        } catch (error) {
            alert(error);
            navigate('/signup');
        }
    };

    return (
        <div className="h-screen bg-orange-400 flex flex-col items-center">
            <h1 id="h1" className="text-8xl font-bold text-sky-300
                pt-1 pb-8 align-baseline">
                    Sign Up
            </h1>
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
                                <label className="block mb-1 text-indigo-500" htmlFor="name">Name</label>
                                <input id="name" ref={nameRef} alt="" className="w-full rounded p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="text" name="name" placeholder="Name" />
                            </div>

                            <div>
                                <label className="block mb-1 text-indigo-500" htmlFor="emailAdress">Email adress</label>
                                <input id="email" ref={emailRef} alt="" className="w-full rounded p-2 mb-2 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="email" email="emailAdress" placeholder="Email adress" />
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
                                onClick={(event) => submit(event)}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SignUp;