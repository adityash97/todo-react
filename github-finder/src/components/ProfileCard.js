export default function ProfileCard(props) {
  return (
    <>
      <div className="card m-2" style={{ width: "13rem" }}>
        <img
          src={props.avatar_url}
          className="card-img-top image-fluid"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">ID : {props.login}</h5>
          <p className="card-text">Hey!! This is profile of {props.login}</p>
          <a href="#" className="btn btn-primary">
            View
          </a>
          <a
            href={props.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning"
          >
            On Github
          </a>
        </div>
      </div>
    </>
  );
}
