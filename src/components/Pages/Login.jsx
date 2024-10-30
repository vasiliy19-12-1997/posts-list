import Input from "../UI/Input/Input";

export function Login() {
  return (
    <>
      <h1>Страница с логином</h1>
      <form action="">
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
      </form>
    </>
  );
}
