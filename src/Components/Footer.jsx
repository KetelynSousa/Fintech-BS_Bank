import styles from './Footer.module.css'
import footer from '../imagens/logo.png'
import insta from '../imagens/insta.png'
import face from '../imagens/facebook.png'
import lin from '../imagens/linkedin.png'

function Footer(){
    return(
        <footer id={styles.footer1} >
            <div id={styles.parte2}>
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Serviços</p>
               </div>
                <div id={styles.parte1}>
                    <img src={footer} alt="png" />
                    <div id={styles.redes}>
                        <img src={insta} alt="png" />
                        <img src={face} alt="png" />
                        <img src={lin} alt="png" />
                    </div>
                    <p> ©2023 Brito Sousa. Todos os direitos reservados.</p> 
                </div>
                <div id={styles.parte3}>
                    <h1>Fale Conosco</h1>
                    <p>E-Mail: bsbank2023@gmail</p>
                    <p>(99) 99895-9000</p>
                </div>
               

        </footer>

    )
}

export default Footer