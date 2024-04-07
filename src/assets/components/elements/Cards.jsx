import ButtonA from "./ButtonA"
import styles from '../../sass/Cards/Cards.module.css'
import PropTypes from 'prop-types';
import Images from "./Images"


function Cards({card, nomeimg, nome}) {
    return (
        <section className={styles.cards}>
            <Images nomeimg={nomeimg}/>
            <h3>{card}</h3>
            <ButtonA name={nome}/>
        </section>
    )
}

Cards.propTypes = {
    card: PropTypes.string.isRequired,
    nomeimg: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
}

export default Cards;