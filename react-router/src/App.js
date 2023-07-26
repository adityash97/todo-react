
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout.js'
import Home from './Home.js'
import BlogRouter from './Blog/BlogRouter.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/blogs/*" element={<BlogRouter />}></Route>
            <Route path="*" element={<>Not Found</>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
