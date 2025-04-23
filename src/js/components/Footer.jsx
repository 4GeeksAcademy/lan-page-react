import PropTypes from 'prop-types'

const Footer = (props) => {
    return (
        <div className="container-fluid bg-black text-center p-4">
            <a href="" className="text-light text-decoration-none">{props.foot}</a>
        </div>
    )
}

Footer.PropTypes= {
foot: PropTypes.string.isRequired
}

export default Footer