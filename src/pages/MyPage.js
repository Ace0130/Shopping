import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let isLoggined = location.state.isLoggined
        if (!isLoggined) {
            navigate('/login', { state: { isLoggined: false } });
        }
    }, []);

    // get으로 3001번 포트의 서버에서 data를 넘겨받음
    axios.get("http://localhost:3001/profile")
        .then((response) => {
            const length = response.data.length
            if (length !== 0) {
                setName(response.data[length - 1].name);
                setEmail(response.data[length - 1].email);
                setPassword(response.data[length - 1].password);
            }
        });

    return <div>
        <h1>로그인 성공</h1>
        <div>name : {name}</div>
        <div>email : {email}</div>
        <div>password : {password}</div>
        <button onClick={() => {
            navigate('/', { state: { isLoggined: false } });
        }}>Log Out</button>
    </div>
}

export default MyPage;