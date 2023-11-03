export default function  FollowersComponent(props){
    return (
      <>
        <tr>
          <th scope="row">{props.index +1}</th>
          <td>
            <img
              className="rounded"
              src={props.follower.avatar_url}
              alt="follower-icon"
              width="50px"
              height="50px"
            />
          </td>
          <td>{props.follower.login}</td>
          <td>
            <a
              href={props.follower.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              View On Github
            </a>
          </td>
        </tr>
      </>
    );
}