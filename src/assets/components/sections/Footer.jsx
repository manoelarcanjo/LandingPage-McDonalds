import styles from '../../sass/Footer/Footer.module.css'
import Images from '../elements/Images'
import logo from '../../images/logo.png'
import play from '../../images/pla.png'
import apple from '../../images/app_store_3x_d293084ca1 1.png'

function Footer () {
    return (
        <footer className={styles.ftr}>
            <div>
                <Images nomeimg={logo}/>
                <p>© McDonald’s 2024</p>
            </div>
            
            <p>Todos os direitos reservados</p>

            <div>
                <Images nomeimg={play}/>
                <Images nomeimg={apple}/>
            </div>
        </footer>
    )
}

export default Footer;