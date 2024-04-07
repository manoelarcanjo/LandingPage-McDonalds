import Logo from '../../images/logo.png'
import Button from '../elements/Button'
import styles from '../../sass/Navbar/Navbar.module.css'
import icon from '../../images/iconcell.svg'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={Logo} alt="Logo"/>

            <section>
                <div>
                    <img src={icon} alt="celular" />
                    <p>Baixe o App</p>
                </div>

                <Button name='Peça seu Méqui'/>
            </section>
        </nav>
    )
}

export default Navbar;