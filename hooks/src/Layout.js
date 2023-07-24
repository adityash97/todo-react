import { Outlet, Link } from "react-router-dom";
export function Layout() {
  return (
    <>
      <div className="card bg-primary text-black">
        <nav className="">
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="text-white">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
