import { useState } from 'react';
import styles from '../../sass/Main/Main.module.css'
import PropTypes from 'prop-types';
import Images from '../elements/Images';
import Batata from '../../images/batata.svg'
import Bigmac from '../../images/bigmac.svg'
import Sorvete from '../../images/sorvete.svg'


function Main() {

    const [mainImg, setMainImg] = useState(Bigmac);

    const handleImageClick = (newImg) => {
        setMainImg(newImg);
    }

    return (
        <section className={styles.main}>
            <div>
                <img src={mainImg} alt='' />
                <h1>BATEU AQUELA <br/> <span>#FOME</span> DE <span>MÉQUI</span>?</h1>
            </div>

            <div className={styles.cardimg}>
                <Images nomeimg={Bigmac} altimg='Big Mac' onClick={() => handleImageClick(Bigmac)}/>
                <Images nomeimg={Batata} altimg='Batata Mac'  onClick={() => handleImageClick(Batata)}/>
                <Images nomeimg={Sorvete} altimg='Sorvete Mac' onClick={() => handleImageClick(Sorvete)}/>
            </div>
        </section>
        
        
    )
}

Main.propTypes = {
    altimg: PropTypes.string.isRequired,
}

export default Main;