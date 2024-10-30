import { Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter, router } from "./Router";
export function AppRouter() {
  return (
    <Routes>
      {privateRouter.map((route) => {
        return <Route element={<route.element />} path={route.path} />;
      })}
    </Routes>
  );
}
