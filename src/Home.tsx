import './App.css'
import InfoButton from './component/InfoButton';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    navigate(url);
  };
  return (
    <div >
      <button onClick={()=>handleRedirect(`/user-profile`)} className="mt-2 p-2 border-green-500 rounded-md border-4 bg-green-200 hover:shadow-xl hover:bg-green-600 hover:text-white">Profile Setting</button>
      <InfoButton />
    </div>
  )
}

export default Home;
