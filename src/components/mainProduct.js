import { Link, useNavigate } from "react-router-dom";
import productData from "../../productData";
import Header from "../components/header";

const MainProduct = () => {
  const navigate = useNavigate();

  let content = [];
  for (const data of productData) {
    let path = `/product/${data.id}`;
    content.push(
      /* 상품 목록 나열을 위한 컨테이너(반응형)*/
      <div className="p-5 md:w-1/2 lg:w-1/3">
        {/* 각각의 상품 테두리 */}
        <div
          key={data.id}
          className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden 
        flex flex-wrap items-center"
        >
          <button
            onClick={() => {
              {
                /* Detail page로 이동하게 만들어야함. */
              }
              navigate(path);
            }}
          >
            <img
              className="w-full md:h-32 lg:h-56 object-cover object-center"
              alt={data.name}
              src={data.path}
            />
          </button>
          {/* 내용 및 기타 */}
          <div className="flex items-center p-6 w-full">
            <Link to={path}>
              <h3
                className="text-base font-bold text-gray-500
                align-top tracking-wider"
              >
                {data.title}
              </h3>
            </Link>
            <h2
              className="text-xl font-bold text-slate-700
              align-top tracking-wider"
            >
              {data.price}
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default MainProduct;
