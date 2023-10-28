// call the api to get user details on the basis of user_id
// And send Data to Profile Page(followers and following)
import {useState} from 'react'
export default function ProfileCard(props) {
  
  const [user,setUser] = useState({
  "login": "jsa",
  "id": 2024,
  "node_id": "MDQ6VXNlcjIwMjQ=",
  "avatar_url": "https://avatars.githubusercontent.com/u/2024?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jsa",
  "html_url": "https://github.com/jsa",
  "followers_url": "https://api.github.com/users/jsa/followers",
  "following_url": "https://api.github.com/users/jsa/following{/other_user}",
  "gists_url": "https://api.github.com/users/jsa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jsa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jsa/subscriptions",
  "organizations_url": "https://api.github.com/users/jsa/orgs",
  "repos_url": "https://api.github.com/users/jsa/repos",
  "events_url": "https://api.github.com/users/jsa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jsa/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Janne Savukoski",
  "company": null,
  "blog": "https://www.linkedin.com/in/savukoski/",
  "location": "Vantaa, Finland",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 24,
  "public_gists": 11,
  "followers": 10,
  "following": 0,
  "created_at": "2008-03-03T16:45:54Z",
  "updated_at": "2023-09-19T17:57:12Z"
})


  return (
    <>
      <div className="card m-2" style={{ width: "13rem" }}>
        <img
          src={props.avatar_url}
          className="card-img-top image-fluid"
          alt="..."
        ></img>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">ID : {props.user_id}</h5>
          <p className="card-text">Hey!! This is profile of {props.login}</p>
            <a href="#" className="btn btn-primary mb-1">
              View Profile
            </a>
            <a
              href={props.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              View On Github
            </a>
        </div>
      </div>
    </>
  );
}
