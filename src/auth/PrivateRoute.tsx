import {Outlet, Navigate} from "react-router-dom";

export function PrivateRoute() {
  const user = localStorage.getItem("user");
  return user ? <Outlet /> : <Navigate to="/login" />
}






// import React, { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
// import { useLocation } from 'react-router-dom'

// export function PrivateRoute() {

//   const navigate = useNavigate();
//   const handleRedirect = (url: string) => {
//     navigate(url);
//   };
//   const location = useLocation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const [currentUrl, setCurrentUrl] = useState("");

//   const [isLoggedIn, setIsLoggedIn]= useState(false);

//   const correctEmail = "text@abc.com";
//   const correctPassword = "1234";

//   const successToast =() => {toast.success("Please wait")};
//   const errorToast = () => {toast.error("Please enter correct info")};

//   const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       errorToast();
//       return;
//     }else if (email === correctEmail && password === correctPassword) {
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       successToast();
//       setIsLoggedIn(true);
//       navigate(location.pathname);
//       //handleRedirect(location.pathname);
//       //setCurrentUrl(location.pathname);
//       //handleRedirect("/task-main-page");  
//     } else {
//       errorToast();
//     }
//   };

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("email");
//     const savedPassword = localStorage.getItem("password");
  
//     if (savedEmail=== correctEmail && savedPassword=== correctPassword ) {
//       setIsLoggedIn(true);
//       navigate(location.pathname);
//       //handleRedirect(location.pathname);
      
//     }
//     else {
//       navigate(location.pathname);
//       //handleRedirect("/"); 
//     }

//   }, [location.pathname, navigate]);

//   // if (isLoggedIn) {
//   //   return <div>Redirecting...</div>;  // Or render a loading indicator, etc.
//   // }

//   return (
//     <div>
//       <Toaster />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-200 rounded-xl mt-48 flex flex-col gap-4 p-4 max-w-fit m-auto"
//       >
        // <div className="text-xl mb-6">Sign in to App</div>
        // <div className="flex flex-col gap-2">
        //   <div className="flex flex-row gap-9 ">
        //     <div className="">Email</div>
        //     <input
        //       type="email"
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //       placeholder="text@abc.com"
        //       className="text-gray-600 italic border-gray-400 border-2 rounded-md pl-1"
        //     />
        //   </div>

        //   <div className="flex flex-row gap-2">
        //     <div className="">Password</div>
        //     <input
        //       type="password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //       placeholder="1234"
        //       className="text-gray-600 italic border-gray-400 border-2 rounded-md pl-1"
        //     />
        //   </div>

        // </div>
        
        // <button type="submit" className="text-white bg-green-500 max-w-fit m-auto p-1 rounded-md mt-4">
        //   Login
        // </button>
        
//       </form>
//     </div>
//   );
// }

