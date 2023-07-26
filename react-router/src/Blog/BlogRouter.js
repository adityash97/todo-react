import { Routes, Route } from "react-router-dom";
import BlogList from './BlogList.js'
import BlogAbout from './BlogAbout.js'
export default function BlogRouter(){
    return (
      <Routes>
        <Route index element={<BlogList />}></Route>
        <Route path="about/:blogId" element={<BlogAbout />}></Route>
        <Route path="about/" element={<BlogAbout />}></Route>
        <Route path="*" element={<>Not Found in Blog</>}></Route>
      </Routes>
    );
}