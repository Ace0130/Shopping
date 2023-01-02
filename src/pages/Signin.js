import axios from 'axios';

const Signin = () => {
    axios.get("http://localhost:3001/loginInfo")
    .then((response) => {
        const email = response.data[0].email
        const password = response.data[0].password
        // if (email !== true && password !== true) {
        //     throw new Error(err);
        // }
        // get으로 3001번 포트의 서버에서 data를 넘겨받음
        document.writeln("email : " + response.data[0].email);
        document.writeln("password : " + response.data[0].password);
    })
    // email이나 password중 하나라도 값을 못받을 경우 error 처리 구현해야함.
    .catch(error => {
        console.log(error);
    })
    return <div>
        로그인 성공
    </div>
}

export default Signin;