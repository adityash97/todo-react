import {Link} from 'react-router-dom'
import React,{ useState } from 'react';
export const sampleBlogData = [
  {
    name: "ABCD",
    id: 1,
    author: "pqre",
  },
  {
    name: "ABCD2",
    id: 2,
    author: "pqre2",
  },
  {
    name: "ABCD3",
    id: 3,
    author: "pqre3",
  },
];
export default function BlogList(){
    
    const [blogs,setBlog] = useState(sampleBlogData)

    return (
      <>
        <div className="d-flex justify-content-between">
          <h2>Blog List</h2>
          <button className='btn btn-success'>

          <Link to={`about/`} className="text-black">
            About
          </Link>
          </button>
        </div>

        {blogs.map((blog) => {
          return (
            <ul>
              <li>{blog.name}</li>
              <button type="button" className="btn btn-primary">
                <Link to={`about/${blog.id}`} className="text-black">
                  About
                </Link>
              </button>
            </ul>
          );
        })}
      </>
    );
}