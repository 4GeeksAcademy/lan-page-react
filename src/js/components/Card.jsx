import PropTypes from "prop-types"

const Card = (props) => {
  return (
          <div className="col-md-3 py-5">
            <div className="card">
              <img className="card-img-top" src={props.btnjb.src} alt="Card image cap" /> 
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.prrfo}</p>
                
              </div>
              <div className="card-footer">
              <a href="#" className="btn btn-primary">{props.btnjb.text}</a>
              </div>
            </div>
          </div>
    )}
    Card.PropTypes = {
        title: PropTypes.string.isRequired,
        prrfo: PropTypes.string.isRequired,
        btnjb: PropTypes.string.isRequired
    }

export default Card;