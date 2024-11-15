import './App.css'
import {useDispatch, useSelector} from "react-redux";
//import { getInfoRequest } from './store/reducer';

import InfoButton from './component/infoButton';

function Home() {
  
  const dispatch = useDispatch();
  const info = useSelector((state:any) =>state.infoReducer.info)

  return (
    <>
      <InfoButton />
    </>
  )
}

export default Home;

{/*<button className="mx-auto mt-2 items-center p-2 border-red-500 rounded-md border-4 bg-orange-200 hover:shadow-xl hover:bg-orange-600 hover:text-white" 
        onClick={()=>dispatch(getInfoRequest())} >Get Info</button>  
  <div>{info?.map((info:any) =>{return <li key={info.id} className="text-red-500 bg-yellow-300">{info.name}</li>})}</div>*/}
