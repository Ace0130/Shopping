import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex h-26 mb-6 rounded-md border-b-8 border-black-500">
      <div className="flex-1 py-4 bg-white-600">
        <div className="flex flex-row justify-items-start">
          <img
            className="w-12 h-12 max-w-[3rem] max-h-[3rem] pointer-events-none"
            alt="shopping"
            src={"/image/shopify.svg"}
          />
          <Link to="/">
            <h1 className="text-5xl font-semibold tracking-tighter text-black-400 inline vertical-align:bottom font-medium ">
              Shopping Mall
            </h1>
          </Link>
        </div>
      </div>

      <div>
        <Link to="/mypage">
          <img
            className="w-24 h-20 my-4 justify-center sm:justify-between sm:px-5"
            alt="mypage"
            src={"/image/mypage.svg"}
          />
        </Link>
      </div>

      <div>
        <Link to="/mypage">
          <img
            className="w-24 h-20 my-4"
            alt="cart"
            src={"/image/shoppingcart.svg"}
          />
        </Link>
      </div>

      <div>
        <Link to="/mypage">
          <img
            className="w-24 h-20 my-4"
            alt="lately"
            src={"/image/lately.svg"}
          />
        </Link>
      </div>
    </header>
  );
}
