import PropTypes from 'prop-types';

function Images ({nomeimg, altimg, onClick}) {
    return (
        <img src={nomeimg} alt={altimg} onClick={onClick}/>
    )
}

Images.propTypes = {
    nomeimg: PropTypes.string.isRequired,
    altimg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Images;