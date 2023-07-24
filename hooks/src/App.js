import React from "react";
import { Layout } from "./Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//blog routes
import { BlogRoutes } from "./Blog/BlogRoutes.js";

function App() {
  
  // states

  // hooks

  // utility functions

  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/blogs/*" element={<BlogRoutes />}></Route>  
          <Route
            path="*"
            element={
              <>
                <h1>Not Found</h1>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

