import style from '../../sass/Button/Button.module.css'
import PropTypes from 'prop-types';

function ButtonA ({name}) {
    return (
        <button className={style.btn}>
            {name}
        </button>
    )
}

ButtonA.propTypes = {
    name: PropTypes.string.isRequired,
}

export default ButtonA;