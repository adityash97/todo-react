
import {  Link } from "react-router-dom";
import { AboutBlog } from "./AboutBlog"
export function BlogHome(){
    return (
      <>
        <h3>This is a blog page</h3>
        <h4>This is first blog</h4>
        <Link to="/blogs/about/"  >About</Link>
      </>
    );
}