import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </nav>
    </>
  );
}
