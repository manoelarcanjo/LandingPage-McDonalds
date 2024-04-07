import styles from '../../sass/Promo/Promo.module.css'
import Cards from '../elements/Cards'
import sofa from '../../images/macsofa.png'
import loja from '../../images/restaurante.png'
import juntos from '../../images/estamosjuntos.png'

function Promo() {
    return (
        <section className={styles.promo}>
            <h2>Promoção</h2>
            <div>
                <Cards nome='Clique Aqui!' nomeimg={sofa} card='Que tal um #MéquiNoSofá?'/>
                <Cards nome='Clique Aqui!' nomeimg={loja} card='venha conhecer nossa nova loja'/>
                <Cards nome='Clique Aqui!' nomeimg={juntos} card='Confira as medidas que o Méqui adotou!'/>
            </div>
        </section>
    )
}

export default Promo