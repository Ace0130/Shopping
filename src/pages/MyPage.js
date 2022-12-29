import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggined = false;
    if (!isLoggined) {
        return <Navigate to="/login"></Navigate>
    }

    return <div>
        <p>마이페이지입니다.</p>
    </div>
}

export default MyPage;