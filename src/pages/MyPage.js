import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyPage = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let isLoggined = location.state.isLoggined

        if (!isLoggined) {
            navigate('/login', {
                state: { isLoggined: false }
            });
        }
    }, []);

    // get으로 3001번 포트의 서버에서 data를 넘겨받음
    axios.get("http://localhost:3001/profile")
        .then((response) => {
            const length = response.data.length
            const email = location.state.email
            const password = location.state.password

            if (length !== 0) {
                for (let data of response.data) {
                    if (data.email === email && data.password === password) {
                        setId(data.id);
                        setName(data.name);
                        setEmail(data.email);
                        setPassword(data.password);
                        break
                    }
                }
            }
        });

    return <div>
        <h1>로그인 성공</h1>
        <div>name : {name}</div>
        <div>email : {email}</div>
        <div>password : {password}</div>
        <li>
            <button onClick={() => {
                navigate('/', {
                    state: { isLoggined: false }
                });
            }}>Log Out</button>
        </li>
        <li>
            <button onClick={() => {
                navigate('/update', {
                    state: { isLoggined: false, name: name, email: email, password: password }
                });
            }}>Update</button>
        </li>
        <li>
            <button onClick={() => {
                axios.delete(`http://localhost:3001/profile/${id}`);
                navigate('/', {
                    state: { isLoggined: false, name: name, email: email, password: password }
                });
            }}>Delete</button>
        </li>
    </div>
}

export default MyPage;