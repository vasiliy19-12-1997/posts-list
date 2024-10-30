import { useContext } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { AuthContext } from "../Context/Context";

export function Login() {
  function login() {
    setIsAuth(true);
    localStorage.setItem("auth", true);
  }
  const { setIsAuth } = useContext(AuthContext);
  return (
    <>
      <h1>Страница с логином</h1>
      <form action="">
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button onClick={login}>Войти</Button>
      </form>
    </>
  );
}
