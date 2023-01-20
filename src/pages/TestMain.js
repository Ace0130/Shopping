import { Link, useNavigate } from "react-router-dom";
import productData from "../../productData";
import Header from "../components/header";
import MainProduct from "../components/mainProduct";

const TestMain = () => {
  const navigate = useNavigate();
  return (
    <div>
      <head>
        <title>Test Main Meue</title>
      </head>
      <Header />
      <MainProduct />
    </div>
  );
};

export default TestMain;
