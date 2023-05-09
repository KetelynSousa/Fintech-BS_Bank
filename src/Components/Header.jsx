import styles from './Header.module.css';
import logo from "../imagens/logo.png";

function Header(){
    return(
      <header>
        <header id={styles.header1}>
            <nav id={styles.menu_hamburger}>
                <div id={styles.menuToggle}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id={styles.menu}>
                        <li id={styles.acessar2}>Home</li>                              
                        <li>Sobre</li>                          
                        <li>Serviços</li>                         
                        <li>Login</li>
                        <li>Cadastro</li>  
                        <li>Fale Conosco</li>                             
                    </ul>
                </div>
            </nav>
            <div id={styles.parte2}>
                    <img src={logo} alt="png" />
                </div>
        </header>
    </header>
    )
}

export default Header