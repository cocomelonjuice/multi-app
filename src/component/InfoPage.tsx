import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
//import { useEffect, useState  } from 'react';

function InfoPage() {

  // Create useNavigate
  const navigate = useNavigate();

  // Create handleRedirect 
  const handleRedirect = (url: string) => {
    navigate(url);
}

  // Get state from store
  const info = useSelector((state: any) => state.infoReducer.info);

  // Get the id from the URL
  const { id } = useParams(); 

  // Create useState
  /*const [currentId, setCurrentId] = useState(id);*/

  //console.log("useState data is " + currentId);
  
  // Create useEffect 
  /*useEffect(()=>{
    const getData = async()=> {
      const reponse = await fetch('https://6732c7cf2a1b1a4ae110e228.mockapi.io/info').then(res => res);
      const data = await reponse.json();

      const selectInfo2 = data.find((item:any)=>item.id === id);
      //setCurrentId(data);

      //console.log("useState data is " + currentId);

      //console.log("useEffect data is " + data[2].id);
    }
    getData();
  },[id]);*/

  // Find the info item with the matching id
  //const selectInfo = info.find((item: any) => item.id === parseInt(id));
  const selectInfo = info.find((item:any)=>item.id === id);

  if (!selectInfo) {

    //console.log("info is " + info + typeof(info) + " - " +"selectInfo " + selectInfo + typeof(selectInfo) + " -  " + "id " + id + typeof(id));
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

  