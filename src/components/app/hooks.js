import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoute } from "../../getRoute/getRoute";


export const useApp = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuth = !!localStorage.getItem("api-key");

  useEffect(() => {
    if (!isAuth && pathname !== getRoute("auth")) navigate(getRoute("mainpage"));
    if (isAuth && pathname === getRoute("root")) navigate(getRoute("auth"));
  }, [pathname, navigate, isAuth]);

  return { isAuth };
};
