import { useNavigate} from "react-router-dom";
import HandleTask from "./HandleTaskButton";
function taskMainPage() {
    const navigate = useNavigate();
    const handleRedirect = (url: string) => {
        navigate(url);
    }

    return(
        <div>
            <div className="flex flex-col gap-4 items-center justify-center mx-auto p-2">
               <button onClick={()=>handleRedirect(`/`)} className="p-2 border-blue-500 rounded-md border-4 bg-blue-200 hover:shadow-xl hover:bg-blue-600 hover:text-white">Return home</button>
                <HandleTask />
            </div>
            
        </div>
    )
}

export default taskMainPage;