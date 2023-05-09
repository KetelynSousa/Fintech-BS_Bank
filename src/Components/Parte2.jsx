import styles from './Parte02.module.css'
import foto from '../imagens/mulher.png'
import celular from '../imagens/celular.png'
import mao from '../imagens/mão.png'


function Parte2(){
    return(
        <section id={styles.section01}>
            <article className={styles.article1}>
            <div className={styles.parte1}>
               <h1> Conheça nosso Cartão de Crédito e Débito. </h1>
               <p>Um cartão moderno, gratuito e prático também. Tudo para facilitar a sua vida. </p>
                <button>Saiba mais</button>
            </div>  
            <div className={styles.parte2}>
                <img src={foto} alt="png" />
            </div> 
            </article>

            <article id={styles.article2}>
            <div className={styles.parte1}>
               <h1> Faça o seu cartão, abra a sua conta e venha fazer parte da nossa família. </h1>
                <button>Peça seu cartão</button>
            </div>  
            <div className={styles.parte2}>
                <img src={celular} alt="png" />
            </div> 
            </article>
            <article className={styles.article1}>
            <div className={styles.parte1} id={styles.article_part1}>
                <button>Invista conosco</button>
            </div>  
            <div className={styles.parte2}>
                <img src={mao} alt="png" />
            </div> 
            </article>
         
        </section>

    )
}


export default Parte2