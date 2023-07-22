


function Footer(props){
    return (
      <>
        <div className="row fixed-bottom">
          <div className="col-2 btn btn-danger" onClick={props.reset}>
            Reset
          </div>
          <div className="col-8 bg-dark text-white text-center">
            <p>{props.total}</p>
          </div>
          <div className="col-2 btn btn-primary">Paynow</div>
        </div>
      </>
    );
}

export default Footer