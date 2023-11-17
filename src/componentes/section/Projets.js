import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio.svg'
import BootCamp from '../../Image/BootCamp.jpeg'
import Login from '../../Image/Login.jpeg'
import Jordan from '../../Image/JordanPage.jpeg'

function Projets() {
    return (
        <div className={styles.projects} id="Projects">
            <h1> Projetos </h1>
            <Card
                img={lpdnc}
                title=" Landing-Page - DNC"
                tech=" HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em Tecnologia"
                repo="https://github.com/GabrielPrompt/ProjetoLandingPage-DNC#--------"
                site="https://landing-page-dcn.netlify.app/"
            />

            <Card
                img={portfolio}
                title=" Portfolio React"
                tech=" React "
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em Tecnologia"
                repo="https://github.com/GabrielPrompt/ProjetoLandingPage-DNC#--------"
                site="https://landing-page-dcn.netlify.app/"
            />

            <Card
                img={BootCamp}
                title=" Bootcamp DNC"
                tech=" HTML, CSS and Javascript "
                description="The project BOOTCAMP was created with the aim of learning CCS and HTML. This website aims to gather information and filter users and their learning objectives."
                repo="https://github.com/GabrielPrompt/BootCamp-DNC"
                site="https://bootcamp-dcn.netlify.app/"
            />

            <Card
                img={Login}
                title=" Page Login"
                tech=" HTML, CSS and Javascript "
                description="Desenvolvimento de uma pagina de Login para aprimorar minhas habilidades de HTML, CSS e JS"
                repo="https://github.com/GabrielPrompt/Login-Page"
                site="https://logiin-html.netlify.app/"
            />

            <Card
                img={Jordan}
                title=" Jordan Page"
                tech=" HTML, CSS and Javascript "
                description="Desenvolvimento de um E-commerce de Tenis da Nike Jordan"
                repo="https://github.com/GabrielPrompt/Jordan-Page"
                site="https://jordanpage.netlify.app/"
            />

            <div className={styles.botton}>
                <ButtonB text='Acesse meu repositório' link='https://github.com/GabrielPrompt?tab=repositories' />
            </div>
        </div>
    )
}

export default Projets