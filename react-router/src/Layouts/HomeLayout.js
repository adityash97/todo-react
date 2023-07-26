import {Link,Outlet} from 'react-router-dom'
export default function HomeLayout() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              React Router Demo
            </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </>
    );
}