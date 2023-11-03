import github_image from "../static/images/github_image.png";
import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from "react";
import { getAllUsers } from "../api/index";
export default function HomePage() {
  const [users, setUsers] = useState([{}]);
  const [filterUsers, setFilterUsers] = useState([{}]);

  useEffect(() => {
    async function fetchData() {
      await getAllUsers(setUsers, setFilterUsers);
    }
    fetchData();
  },[]);
  const filterUserName = (e) => {
    setFilterUsers(
      users.filter((user) => {
        if (user.login.search(e.target.value) !== -1) {
          return true;
        }
        return false;
      })
    );
  };
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className=" d-flex justify-content-center flex-column align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={github_image}
            className="img-thumbnail"
            alt="Github Imag"
            width={80}
            height={80}
          ></img>
          <div className="col text-h3 text-white">Let's Find Git!!</div>
        </div>
      </div>
      <>
        <div className="row mt-2">
          <div className="col-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="defaultCheck1"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                className="form-check-label text-white"
                for="defaultCheck1"
              >
                Web Search
              </label>
            </div>
          </div>
          <div className="col ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Github Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={filterUserName}
              ></input>
              <span
                className="input-group-text btn btn-secondary"
                id="basic-addon2"
              >
                Search
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          {filterUsers.length !== 0 ? (
            filterUsers.map((user) => {
              return (
                <div className="col col-md-2 col-lg-3 text-center d-flex justify-content-center">
                  <ProfileCard
                    key={user.id}
                    user_id={user.login}
                    avatar_url={user.avatar_url}
                    html_url={user.html_url}
                  />
                </div>
              );
            })
          ) : (
            <h3 className="text-h3 text-center text-white">No Data Found!</h3>
          )}
        </div>
      </>
    </>
  );
}
