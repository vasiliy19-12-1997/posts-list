import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Loader from "../UI/Loader/Loader";
import { privateRouter, publicRouter } from "./Router";
export function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);
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
