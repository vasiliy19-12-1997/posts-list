import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./components/Context/Context";
import { AppRouter } from "./components/Rourer/AppRouter";
import { Navbar } from "./components/UI/Navbar/Navbar";
export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
