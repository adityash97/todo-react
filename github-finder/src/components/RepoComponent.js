export default function RepoComponent(props) {
  return (
    <>
      <div
        class="card m-3 overflow-auto"
        style={{ height: "10rem", width: "26rem" ,"background-color": "#97DEE3"}}
      >
        <div class="card-body d-flex justify-content-between flex-column">
          <div className="row ">
            <div className="col-6">{props.full_name}</div>
            <div className="col-3 text-start text-nowrap ">
              {props.created_at}
            </div>
            <div className="col-3 text-end text-nowrap ">
              {props.updated_at}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{props.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-start">
              <a
                href={props.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
              >
                On Github
              </a>
            </div>
            <div className="col text-end">
              Forked Count: {props.forks_count}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
