import { useState } from "react";
import RepoComponent from '../components/RepoComponent'
export default function ProfilePage() {
  const [userdata, setuserdata] = useState([
    {
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url:
        "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false,
    },
  ]);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="card bg-dark m-3 overflow-auto"
          style={{ height: "15rem", width: "60rem" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col text-center">
                <img
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  height="205px"
                  alt=""
                />
              </div>
              <div className="col">
                {userdata.map((data) => {
                  return (
                    <>
                      <div className="row">
                        <div className="col">
                          <p className="text-white">login</p>
                        </div>
                        <div className="col">
                          <p className="text-white">{data.login}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="text-white">login</p>
                        </div>
                        <div className="col">
                          <p className="text-white">{data.login}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <p className="text-white">login</p>
                        </div>
                        <div className="col">
                          <p className="text-white">{data.login}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Repo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Followers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Following
          </a>
        </li>
      </ul>
      {/* Page here on the basis of button */}
      <div class="card m-3">
        <div class="card-body">
                <RepoComponent />
        </div>
      </div>
    </>
  );
}
