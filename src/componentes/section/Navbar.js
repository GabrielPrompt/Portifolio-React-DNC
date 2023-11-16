import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li> <Nav.Link href='#Presentation'>Apresentação</Nav.Link> </li>
                <li> <Nav.Link href='#Skills'>Habilidades</Nav.Link> </li>
                <li> <Nav.Link href='#Projects'>Projetos</Nav.Link> </li>
            </ul>

            <ul className={styles.icon}>
                <li> <a target='_blank' href='https://www.instagram.com/gabriel.bueno___/'> <FaInstagram size={30} /> </a> </li>
                <li> <a target='_blank' href='https://github.com/GabrielPrompt'> <FaGithub size={30} /> </a> </li>
                <li> <a target='_blank' href='https://www.linkedin.com/in/gabriel-bueno-de-camargo-417347291/'> <FaLinkedin  size={30} /> </a> </li>
            </ul>
        </div>
    )
}

export default Navbar