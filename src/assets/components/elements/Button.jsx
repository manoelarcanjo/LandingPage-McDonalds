import Cell from '../../images/app.svg'
import style from '../../sass/Button/Button.module.css'
import PropTypes from 'prop-types';

function Button ({name}) {
    return (
        <button className={style.btn}>
            {name}
            <img src={Cell} alt="Méqui" />
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Button;