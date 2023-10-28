export default function  FollowingComponent(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>
          <img
            className="rounded"
            src={props.following.avatar_url}
            alt="following-icon"
            width="50px"
            height="50px"
          />
        </td>
        <td>{props.following.login}</td>
        <td>
          <a
            href={props.following.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning"
          >
            On Github
          </a>
        </td>
      </tr>
    </>
  );
}
