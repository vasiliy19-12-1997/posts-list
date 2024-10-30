import { About } from "../Pages/About";
import { Posts } from "../Pages/Posts";
import { PostId } from "../Pages/PostId";
import { Error } from "../Pages/Error";
import { Login } from "../Pages/Login";
import { Navigate } from "react-router-dom";

export const privateRouter = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostId },
  { path: "/*", element: Error },
];

export const publicRouter = [
  { path: "/login", element: Login },
  { path: "/*", element: Login },
];
