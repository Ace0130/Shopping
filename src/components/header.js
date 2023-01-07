import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex h-26 mb-6 rounded-md border-b-8 border-violet-500">
      <div className="flex-1 py-4 bg-zinc-600">
        <div className="flex flex-row justify-items-start">
          <img
            className="w-24"
            alt="shopping"
            src="https://cdn.pixabay.com/photo/2018/02/08/16/35/silhouette-3139806__340.png"
          />
          <Link to="/">
            <h1
              className="text-6xl font-semibold tracking-tighter text-fuchsia-400 
              hover:text-fuchsia-500 inline"
            >
              OuterPark
            </h1>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-600 text-fuchsia-300 hover:text-fuchsia-400">
        <Link to="/mypage" state={{ isLoggined: false }}>마이페이지</Link>
      </div>
    </header>
  );
}
