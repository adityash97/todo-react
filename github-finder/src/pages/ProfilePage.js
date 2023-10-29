import { useState, useEffect } from "react";
import { getUserDetails, getRepos, getFollowers } from "../api";
import RepoComponent from "../components/RepoComponent";
import FollowersComponent from "../components/FollowersComponent";
import { useParams } from "react-router-dom";

import { FormatDate } from "../api/filter";

export default function ProfilePage(props) {
  const { user_id } = useParams();

  // user data from props
  const [userdata, setuserdata] = useState({});
  //   Get Repo and follower details from api
  const [repos, setRepos] = useState([
    {}
  ]);
  const [followers, setFollowers] = useState([
    {
      login: "defunkt",
      id: 2,
      node_id: "MDQ6VXNlcjI=",
      avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/defunkt",
      html_url: "https://github.com/defunkt",
      followers_url: "https://api.github.com/users/defunkt/followers",
      following_url:
        "https://api.github.com/users/defunkt/following{/other_user}",
      gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
      organizations_url: "https://api.github.com/users/defunkt/orgs",
      repos_url: "https://api.github.com/users/defunkt/repos",
      events_url: "https://api.github.com/users/defunkt/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/defunkt/received_events",
      type: "User",
      site_admin: false,
    },
  ]);

  const [showRepo, setShowRepo] = useState(true);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const [activeStyleMap,setActiveStyleMap] = useState({
      showRepo: "active",
      showFollowers: " ",
      showFollowings: " ",
    })

  const handleToggle = (handleKey) => {
    const stateMap = {
      showRepo: setShowRepo,
      showFollowers: setShowFollowers,
      showFollowings: setShowFollowings,
    };



    setActiveStyleMap((oldValue) => {
        return {
          showRepo: "",
          showFollowers: " ",
          showFollowings: " ",
        };
      });

    Object.keys(stateMap).forEach((key) => {
      stateMap[key](key === handleKey);
      if(key === handleKey)
        setActiveStyleMap(oldValue => {
      const updatedMap = { ...oldValue };
      updatedMap[handleKey] = "active";
      return updatedMap;
    })
    });
  };

  useEffect(() => {
    async function fetchData() {
      await getUserDetails(user_id, setuserdata);
      await getRepos(user_id,setRepos);
      await getFollowers(user_id,setFollowers);
    }
    fetchData();
  });

  return (
    <>
      <div className="d-flex justify-content-center">
        {userdata && (
          <div
            className="card bg-dark m-3 overflow-auto"
            style={{ height: "15rem", width: "60rem" }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col text-center">
                  <img
                    // {props.avatar_url}
                    src={userdata.avatar_url}
                    height="205px"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <p className="text-white">login ID</p>
                    </div>
                    <div className="col">
                      <p className="text-white">{userdata.login}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-white">Following</p>
                    </div>
                    <div className="col">
                      <p className="text-white">{userdata.following}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-white">Followers</p>
                    </div>
                    <div className="col">
                      <p className="text-white">{userdata.followers}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-white">Name</p>
                    </div>
                    <div className="col">
                      <p className="text-white">{userdata.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-white">Since</p>
                    </div>
                    <div className="col">
                      <p className="text-white">
                        {FormatDate(userdata.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* Other user data will come here */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Tabs  */}
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            className={`nav-link ${activeStyleMap.showRepo}`}
            aria-current="page"
            href="#"
            onClick={() => handleToggle("showRepo")}
          >
            Repos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeStyleMap.showFollowers}`}
            href="#"
            onClick={() => handleToggle("showFollowers")}
          >
            Followers {userdata.followers}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeStyleMap.showFollowings}`}
            href="#"
            onClick={() => handleToggle("showFollowings")}
          >
            Following {userdata.following}
          </a>
        </li>
      </ul>
      {/* Page here on the basis of button */}
      <div className="card m-3">
        <div className="card-body">
          {/* Repos */}
          {showRepo && (
            <div className="row">
              {repos.length !== 0 ? (
                repos.map((repo) => (
                  <div className="col-4" key={repo.id}>
                    <RepoComponent
                      id={repo.id}
                      full_name={repo.full_name}
                      html_url={repo.html_url}
                      description={repo.description}
                      created_at={FormatDate(repo.created_at)}
                      updated_at={FormatDate(repo.updated_at)}
                      forks_count={repo.forks_count}
                    />
                  </div>
                ))
              ) : (
                <h3>Getting Repo Data</h3>
              )}
            </div>
          )}

          {/* Followers */}

          {showFollowings && <h3>Fetching ...</h3>}

          {/* Followings */}
          {showFollowers && (
            <div className="row">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Icon</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Visit Profile</th>
                  </tr>
                </thead>
                {followers.length > 0 ? (
                  followers.map((follower, index) => (
                    <tbody>
                      <FollowersComponent follower={follower} index={index} />
                    </tbody>
                  ))
                ) : (
                  <h3>No Data</h3>
                )}
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
