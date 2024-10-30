import { Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter, router } from "./Router";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import Loader from "../UI/Loader/Loader";
export function AppRouter() {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    <Loader />;
  }
  return (
    <Routes>
      {isAuth
        ? privateRouter.map((route) => {
            return <Route element={<route.element />} path={route.path} />;
          })
        : publicRouter.map((route) => {
            return <Route element={<route.element />} path={route.path} />;
          })}
    </Routes>
  );
}
