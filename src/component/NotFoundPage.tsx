import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
    const navigate = useNavigate();
    const handleRedirect = (url: string) => {
    navigate(url);
    }

    return(
        <div>
            <h1 className="text-red-600 font-bold text-lg">PAGE NOT FOUND</h1>
            <button onClick={()=>handleRedirect(`/`)} className="p-2 border-blue-500 rounded-md border-4 bg-blue-200 hover:shadow-xl hover:bg-blue-600 hover:text-white">Return home</button>
    </div>
    )
}
