import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { iniStateType } from '../store';

function InfoPage() {
  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    navigate(url);
  }
  const info = useSelector((state: any) => state.infoReducer.info);

  // Get the id from the URL
  const { id } = useParams();

  // Find the info item with the matching id
  //const selectInfo = info.find((item: any) => item.id === parseInt(id));
  const selectInfo = info.find((item: any) => item.id === id);
  
  if (!selectInfo) {
    return (
      <div>
        <h1>Info not found</h1>
        <button onClick={()=>handleRedirect(`/`)} className="p-2 border-red-500 rounded-md border-4 bg-orange-200 hover:shadow-xl hover:bg-orange-600 hover:text-white">Return to Home</button>
      </div>
    )
  }else {
    return (
      <div>
        <div>Name: {selectInfo.name}</div>
        <div>Age: {selectInfo.age}</div> 
        <div>Adress: {selectInfo.adress}</div> 
        <div>ID: {selectInfo.id}</div> 
        <button onClick={()=>handleRedirect(`/`)} className="p-2 border-blue-500 rounded-md border-4 bg-blue-200 hover:shadow-xl hover:bg-blue-600 hover:text-white">Another Info ?</button>
      </div>
    );
  }
}

export default InfoPage;

  