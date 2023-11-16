import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong> Bem-vindo ao meu Portfólio</strong></h4>
            <h1> Olá, eu sou o Gabriel Camargo </h1>
            <p>
                Sou estudante na área de Analise e Desenvolvimento de Sistemas, <br />
                atualmente estou cursando pela Escola DNC na área de Formação em Tecnologia, <br/>
                que abrange conhecimento em HTML, CSS, JS, React.js, Note JS, Git e muito mais... <br/>
                Estou a procura da primeira oportunidade de emprego para colocar em pratica  tudo que venho <br/>aprendendo, sou uma pessoa de fácil aprendizado e muito persistente no que faço, sei que tenho <br/> capacidade de ajudar  a empresa a crescer e me tornar um ótimo profissional na minha área.
            </p>
           <ButtonA link='https://github.com/GabrielPrompt' text='Conecte-se comigo!!' />
           
        </div>
    )
}
 
export default Presentation