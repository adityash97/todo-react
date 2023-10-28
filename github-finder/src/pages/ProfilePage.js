import { useState } from "react";
import RepoComponent from "../components/RepoComponent";
import FollowersComponent from "../components/FollowersComponent";

import { FormatDate } from "../api/filter";

export default function ProfilePage(props) {
  // user data from props
  const [userdata, setuserdata] = useState({
    login: "jsa",
    id: 2024,
    node_id: "MDQ6VXNlcjIwMjQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/2024?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jsa",
    html_url: "https://github.com/jsa",
    followers_url: "https://api.github.com/users/jsa/followers",
    following_url: "https://api.github.com/users/jsa/following{/other_user}",
    gists_url: "https://api.github.com/users/jsa/gists{/gist_id}",
    starred_url: "https://api.github.com/users/jsa/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jsa/subscriptions",
    organizations_url: "https://api.github.com/users/jsa/orgs",
    repos_url: "https://api.github.com/users/jsa/repos",
    events_url: "https://api.github.com/users/jsa/events{/privacy}",
    received_events_url: "https://api.github.com/users/jsa/received_events",
    type: "User",
    site_admin: false,
    name: "Janne Savukoski",
    company: null,
    blog: "https://www.linkedin.com/in/savukoski/",
    location: "Vantaa, Finland",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 24,
    public_gists: 11,
    followers: 10,
    following: 0,
    created_at: "2008-03-03T16:45:54Z",
    updated_at: "2023-09-19T17:57:12Z",
  });
  //   Get Repo and follower details from api
  const [repos, setRepos] = useState([
    {
      id: 20113275,
      node_id: "MDEwOlJlcG9zaXRvcnkyMDExMzI3NQ==",
      name: "ardupilot",
      full_name: "jsa/ardupilot",
      private: false,
      owner: {
        login: "jsa",
        id: 2024,
        node_id: "MDQ6VXNlcjIwMjQ=",
        avatar_url: "https://avatars.githubusercontent.com/u/2024?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jsa",
        html_url: "https://github.com/jsa",
        followers_url: "https://api.github.com/users/jsa/followers",
        following_url:
          "https://api.github.com/users/jsa/following{/other_user}",
        gists_url: "https://api.github.com/users/jsa/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jsa/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jsa/subscriptions",
        organizations_url: "https://api.github.com/users/jsa/orgs",
        repos_url: "https://api.github.com/users/jsa/repos",
        events_url: "https://api.github.com/users/jsa/events{/privacy}",
        received_events_url: "https://api.github.com/users/jsa/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/jsa/ardupilot",
      description: "APM Plane, APM Copter, APM Rover source",
      fork: true,
      url: "https://api.github.com/repos/jsa/ardupilot",
      forks_url: "https://api.github.com/repos/jsa/ardupilot/forks",
      keys_url: "https://api.github.com/repos/jsa/ardupilot/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/jsa/ardupilot/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/jsa/ardupilot/teams",
      hooks_url: "https://api.github.com/repos/jsa/ardupilot/hooks",
      issue_events_url:
        "https://api.github.com/repos/jsa/ardupilot/issues/events{/number}",
      events_url: "https://api.github.com/repos/jsa/ardupilot/events",
      assignees_url:
        "https://api.github.com/repos/jsa/ardupilot/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/jsa/ardupilot/branches{/branch}",
      tags_url: "https://api.github.com/repos/jsa/ardupilot/tags",
      blobs_url: "https://api.github.com/repos/jsa/ardupilot/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/jsa/ardupilot/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/jsa/ardupilot/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/jsa/ardupilot/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/jsa/ardupilot/statuses/{sha}",
      languages_url: "https://api.github.com/repos/jsa/ardupilot/languages",
      stargazers_url: "https://api.github.com/repos/jsa/ardupilot/stargazers",
      contributors_url:
        "https://api.github.com/repos/jsa/ardupilot/contributors",
      subscribers_url: "https://api.github.com/repos/jsa/ardupilot/subscribers",
      subscription_url:
        "https://api.github.com/repos/jsa/ardupilot/subscription",
      commits_url: "https://api.github.com/repos/jsa/ardupilot/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/jsa/ardupilot/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/jsa/ardupilot/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/jsa/ardupilot/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/jsa/ardupilot/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/jsa/ardupilot/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/jsa/ardupilot/merges",
      archive_url:
        "https://api.github.com/repos/jsa/ardupilot/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/jsa/ardupilot/downloads",
      issues_url: "https://api.github.com/repos/jsa/ardupilot/issues{/number}",
      pulls_url: "https://api.github.com/repos/jsa/ardupilot/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/jsa/ardupilot/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/jsa/ardupilot/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/jsa/ardupilot/labels{/name}",
      releases_url: "https://api.github.com/repos/jsa/ardupilot/releases{/id}",
      deployments_url: "https://api.github.com/repos/jsa/ardupilot/deployments",
      created_at: "2014-05-23T20:36:42Z",
      updated_at: "2016-03-25T08:45:22Z",
      pushed_at: "2014-06-15T10:18:36Z",
      git_url: "git://github.com/jsa/ardupilot.git",
      ssh_url: "git@github.com:jsa/ardupilot.git",
      clone_url: "https://github.com/jsa/ardupilot.git",
      svn_url: "https://github.com/jsa/ardupilot",
      homepage: "http://ardupilot.com/",
      size: 48865,
      stargazers_count: 0,
      watchers_count: 0,
      language: "C++",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "gpl-3.0",
        name: "GNU General Public License v3.0",
        spdx_id: "GPL-3.0",
        url: "https://api.github.com/licenses/gpl-3.0",
        node_id: "MDc6TGljZW5zZTk=",
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
  ]);
  const [followers, setFolowers] = useState([
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

  const handleToggle = (handleKey) => {
    const stateMap = {
      showRepo: setShowRepo,
      showFollowers: setShowFollowers,
      showFollowings: setShowFollowings,
    };
    Object.keys(stateMap).forEach((key) => stateMap[key](key === handleKey));
  };
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
                  // {props.avatar_url}
                  src="https://avatars.githubusercontent.com/u/1?v=4"
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
      </div>

      {/* Tabs  */}
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="#"
            onClick={() => handleToggle("showRepo")}
          >
            Repo
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => handleToggle("showFollowers")}
          >
            Followers {userdata.followers}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
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

          {showFollowings && <h3>No Data</h3>}

          {/* Followings */}
          {showFollowers && (
            <div className="row">
              {followers.length > 0 ? (
                followers.map((follower, index) => (
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Icon</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Visit Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                      <FollowersComponent follower={follower} index={index} />
                    </tbody>
                  </table>
                ))
              ) : (
                <h3>No Data</h3>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
