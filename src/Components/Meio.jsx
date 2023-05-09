import styles from './Meio.module.css';
import cartao from '../imagens/Cartões.png'


function Meio(){
    return(
        <section>
            <div id={styles.section1}>
                <div id={styles.parte1}>
                    <img src={cartao} alt="png"/>
                </div>
                <div id={styles.parte2}>
                    <h1>O futuro é a razão que a gente faz planos. </h1> 
                    <p>Escolha o futuro. Comece  a controlar  melhor sua vida financeira. </p>

                    <button> Abra sua conta!</button>
                </div>
            </div>

        </section>
    )
}

export default Meio