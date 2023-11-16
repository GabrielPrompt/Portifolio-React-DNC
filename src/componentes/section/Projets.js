import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio.svg'


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
            <div className={styles.botton}>
                <ButtonB text='Acesse meu repositório' link='https://github.com/GabrielPrompt?tab=repositories' />
            </div>
        </div>
    )
}

export default Projets