import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import MyPage from './MyPage';
import Product from './Product';
import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/product/:detail" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;