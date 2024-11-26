import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);

}