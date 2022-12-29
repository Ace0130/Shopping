import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import MyPage from './MyPage';
import NotFound from './NotFound';
import Signin from './Signin';
import Product from './Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/product/:detail" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;