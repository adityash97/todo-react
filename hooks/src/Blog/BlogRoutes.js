import { Routes,Route } from "react-router-dom"
import { BlogHome } from "./Home.js";
import { AboutBlog } from "./AboutBlog.js";
export function BlogRoutes(){
    return (
      <Routes>
        <Route index element={<BlogHome />} />
        <Route path="about/" element={<AboutBlog />} />
        <Route path="*" element={<h1>Not founed insdie blog</h1>} />
      </Routes>
    );
}