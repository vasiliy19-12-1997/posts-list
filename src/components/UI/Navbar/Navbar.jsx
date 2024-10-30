import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import Button from "../Button/Button";
export function Navbar() {
  const { setIsAuth } = useContext(AuthContext);
  function logOut() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
        <Button onClick={logOut}>Выйти</Button>
      </nav>
    </>
  );
}
