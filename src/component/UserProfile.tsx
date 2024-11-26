import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../store/imagereducer'; 
import  iniStateType from '../store/imagereducer'; 
import { useNavigate } from "react-router-dom";

export default function UserProfile() {

  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    navigate(url);
  };

  const dispatch = useDispatch();
  const base64Image = useSelector((state: typeof iniStateType) => state.imageReducer.base64Image);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onloadend = () => {
        if (reader.result) {
          dispatch(setImage(reader.result as string)); 
        }
      };
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className='mt-4 flex flex-col  gap-6 border-2 rounded-md p-2 border-gray-500 max-w-96 min-h-64'>
        <h1>Profile Avatar</h1>
        {base64Image && (

            <img src={base64Image} alt="Avatar" className="border-2 border-black max-w-56 h-auto rounded-sm"/>
            /* <h3>Base64 String:</h3>
            <textarea value={base64Image} rows={10} cols={80} readOnly style={{ marginTop: '10px' }}/>style={{ width: '300px', height: 'auto' }} */
        )}
        <div className='flex flex-row'>
          <input type="file"  onChange={handleImageUpload} className='text-xs' />
        </div>
        <div className="flex flex-col">
          <div>User email: email@abc.com</div>
          <div className="mr-14">User password: 123</div>
        </div>
        
        
      </div>

      <div>
        <button onClick={()=>handleRedirect(`/logout`)} className="mt-2 p-2 border-red-500 rounded-md border-4 bg-orange-200 hover:shadow-xl hover:bg-orange-600 hover:text-white">Log Out</button>
      </div>
      <div>
      <button onClick={()=>handleRedirect(`/`)} className="p-2 border-green-500 rounded-md border-4 bg-green-200 hover:shadow-xl hover:bg-green-600 hover:text-white">Return to Home</button>
      </div>
    </div>
  );
};





