import { sampleBlogData } from "./BlogList"
import {useParams,useNavigate} from 'react-router-dom'
import { useState } from "react"

export default function BlogAbout(){
    const {blogId} = useParams()
    const navigate = useNavigate()
    const [blog] = useState(getBlog());
    function getBlog(){
        return sampleBlogData.filter((blog) => {
        return blog.id === parseInt(blogId);
        });
    }
    debugger
    return (
      <>
        {blogId ? (
          <div class="card">
            <div class="card-header">About amazing blog : {blog.name}</div>
            <div class="card-body">
              <h5 class="card-title">It's Id is : {blogId}</h5>
              <p class="card-text">
                This has been written by great author : {blog.author}
              </p>

              <button onClick={() => navigate(-1)} class="btn btn-primary">
                Go Back
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3>This is a about page</h3>
            <button onClick={() => navigate(-1)} class="btn btn-primary">
              Go Back
            </button>
          </>
        )}
      </>
    );
}