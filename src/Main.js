import { Link, useNavigate } from "react-router-dom";

const GridProductData = () => {
    const navigate = useNavigate();

    const productData = [
        {
            id: 1,
            name: "에어팟",
            path: "https://cdn.pixabay.com/photo/2020/05/14/09/54/earphones-5193970__340.jpg",
            title: "에어팟 프로2",
            price: "320,000원"
        },
        {
            id: 2,
            name: "노트북",
            path: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
            title: "노트북",
            price: "640,000원"
        },
        {
            id: 3,
            name: "헤드폰",
            path: "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__340.jpg",
            title: "무선 헤드폰",
            price: "80,000원"
        },
        {
            id: 4,
            name: "닌텐도 스위치",
            path: "https://cdn.pixabay.com/photo/2019/01/24/23/54/nintendo-switch-3953601__340.jpg",
            title: "닌텐도 스위치",
            price: "380,000원"
        },
        {
            id: 5,
            name: "무선 충전기",
            path: "https://images.pexels.com/photos/7952558/pexels-photo-7952558.jpeg?auto=compress&cs=tinysrgb&w=300",
            title: "무선 충전기",
            price: "30,000원"
        },
        {
            id: 6,
            name: "듀얼모니터",
            path: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=300",
            title: "듀얼 모니터",
            price: "200,000원"
        },
        {
            id: 7,
            name: "마우스",
            path: "https://cdn.pixabay.com/photo/2013/01/10/14/15/mouse-74533__340.jpg",
            title: "사무용 마우스",
            price: "20,000원"
        },
        {
            id: 8,
            name: "키보드",
            path: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=300",
            title: "키보드",
            price: "50,000원"
        },
        {
            id: 9,
            name: "태블릿",
            path: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427__340.jpg",
            title: "태블릿",
            price: "340,000원"
        }
    ];

    let content = []
    for (const data of productData) {
        let path = `/product/${data.id}`
        content.push(<div key={data.id} className="flex flex-col items-center">
            <button onClick={() => {
                navigate(path);
            }}>
                <img className="w-80 h-56 block rounded-lg object-fill"
                    alt={data.name} src={data.path} />
            </button>
            <Link to={path}>
                <h3 className="text-base font-bold text-gray-500
                align-top tracking-wider">
                    {data.title}
                </h3>
            </Link>
            <h2 className="text-xl font-bold text-slate-700
            align-top tracking-wider">
                {data.price}
            </h2>
        </div>);
    }

    return <>
        {content}
    </>
}

const Main = () => {
    return <div>
        <header className="flex h-26 mb-6 rounded-md border-b-8 border-violet-500">
            <div className="flex-1 py-4 bg-zinc-600">
                <div className="flex flex-row justify-items-start">
                    <img className="w-24"
                        alt="shopping"
                        src="https://cdn.pixabay.com/photo/2018/02/08/16/35/silhouette-3139806__340.png" />
                    <Link to="/">
                        <h1 className="text-6xl font-semibold tracking-tighter text-fuchsia-400 
                        hover:text-fuchsia-500 inline">
                            OuterPark
                        </h1>
                    </Link>
                </div>
            </div>
            <div className="bg-zinc-600 text-fuchsia-300 hover:text-fuchsia-400">
                <Link to="/mypage">
                    마이페이지
                </Link>
            </div>
        </header>
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <GridProductData />
        </div>
    </div>
}

export default Main;