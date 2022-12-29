import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return <div className="h-screen bg-gradient-to-tr 
    from-orange-500 to-violet-500 flex flex-col items-center">
        <h1 className="text-9xl font-bold text-lime-300 
        align-top py-5 tracking-wider">404</h1>
        <h2 id="h2" className="text-7xl font-bold text-teal-300 
        align-top tracking-wider">Page Not Found</h2>
        <img id="img" className="w-3/5 mt-20" alt="error"
            src="https://cdn.pixabay.com/photo/2019/02/04/08/38/
        pixel-cells-3974187_960_720.png"/>
        <button className="py-2 px-4 mt-20 font-semibold rounded-lg 
        border-2 border-indigo-500 bg-indigo-700 shadow-md 
        text-amber-300 hover:bg-indigo-800 items-center"
            onClick={() => {
                navigate('/');
            }}>
            Go To The HomePage</button>
    </div>
}

export default NotFound;