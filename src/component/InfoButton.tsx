import {useDispatch, useSelector} from "react-redux";
import { getInfoRequest } from '../store/reducer';
import { useNavigate, useParams } from "react-router-dom";
import TodoButton from "./TodoButton";

function InfoButton () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const info = useSelector((state: any) =>state.infoReducer.info)
    const { id } = useParams();
    const handleRedirect = (url: string) => {
        navigate(url);
    }
    return (
        <div>
            <div>
                <button className="mx-auto mt-2 mb-2 items-center p-2 border-red-500 rounded-md border-4 bg-orange-200 hover:shadow-xl hover:bg-orange-600 hover:text-white" 
                onClick={()=>dispatch(getInfoRequest())}>Get Info</button>  
                <TodoButton />
            </div>
            <div className="mt-2">{info?.map((info:any) =>{return <ul key={info.id} className="text-red-500 bg-yellow-500"><button onClick={()=> handleRedirect(`/InfoPage/${info.id}`)} className="mx-auto mt-2 items-center p-4 min-w-40 border-red-500 rounded-md border-4 bg-orange-200 hover:shadow-xl hover:bg-orange-600 hover:text-white">{info.name}</button></ul>})}</div>
        </div>
    )
}

export default InfoButton;

