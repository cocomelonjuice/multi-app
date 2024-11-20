import { useNavigate, useParams } from "react-router-dom";

function todoButton (){

    const navigate = useNavigate();    
    const handleTodoPage = (url:string)=>{
        navigate(url);
    }

    return (
        <div>
            <button className="p-2 border-blue-500 rounded-md border-4 bg-blue-200 hover:shadow-xl hover:bg-blue-600 hover:text-white" onClick={()=>handleTodoPage(`/TaskMainPage`)}>Go to Todo Main Page</button>
        </div>
    )
}

export default todoButton;