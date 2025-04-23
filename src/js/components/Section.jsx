import PropTypes from "prop-types"
import Card from "./Card";

const Section = (props) => {

    return (
        <div className="container">
            <div className="row p-5 my-1 bg-body-tertiary rounded-3 border border-1 border-black">
                <div className="col-md-12">
                    <h1 className="display-5 fw-bold">{props.title}</h1>
                    <p className="fs-4">{props.prrfo}</p>
                    <button className="btn btn-primary btn-lg mb-4" type="button">{props.btnjb.text}</button>
                </div>
            </div>
            <div className="row col-md-12">
                <Card title={"Imagen1"} prrfo={"1-Some quick example text to build on the card title and make up the bulk of the card's content."} btnjb={{text: 'Ir a Imagen', src: 'https://picsum.photos/500/400'}} />
                        
                <Card title={"Imagen2"} prrfo={"2-Some quick example text to build on the card title and make up the bulk of the card's content."} btnjb={{text: 'Ir a Imagen', src: 'https://picsum.photos/id/235/500/400'}} />
                        
                <Card title={"Imagen3"} prrfo={"3-Some quick example text to build on the card title and make up the bulk of the card's content."} btnjb={{text: 'Ir a Imagen', src: 'https://picsum.photos/id/232/500/400'}} />
                        
                <Card title={"Imagen4"} prrfo={"4-Some quick example text to build on the card title and make up the bulk of the card's content."} btnjb={{text: 'Ir a Imagen', src: 'https://picsum.photos/id/231/500/400'}} />    
            </div>
        </div>
    );
};

Section.PropTypes = {
    title: PropTypes.string.isRequired,
    prrfo: PropTypes.string.isRequired,
    btnjb: PropTypes.string.isRequired
}

export default Section;