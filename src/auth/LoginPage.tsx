import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) { 
      handleRedirect("/");
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const userEmail = "email@abc.com";
    const userPassword = "123";

    if (email === userEmail && password === userPassword) {
      localStorage.setItem("user", JSON.stringify({ email }));
      handleRedirect("/"); 
    } else {
      toast.error("Please enter correct info");
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleLogin} className="bg-gray-200 rounded-xl mt-48 flex flex-col gap-4 p-4 max-w-fit m-auto">
      <div className="text-xl mb-6">Sign in to App</div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-9 ">
            <div className="">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@abc.com"
              className="text-gray-600 italic border-gray-400 border-2 rounded-md pl-1"
            />
          </div>

          <div className="flex flex-row gap-2">
            <div className="">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123"
              className="text-gray-600 italic border-gray-400 border-2 rounded-md pl-1"
            />
          </div>

        </div>
        
        <button type="submit" className="text-white bg-green-500 max-w-fit m-auto p-1 rounded-md mt-4">
          Login
        </button>

      </form>
    </div>
  );
}

{/* <div>
<label>Email:</label>
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
</div>
<div>
<label>Password:</label>
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
</div>
<button type="submit">Login</button> */}