import styles from '../section/Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.icon}>
                <li> <a target='_blank' href='https://www.instagram.com/gabriel.bueno___/'> <FaInstagram size={30} /> </a> </li>
                <li> <a target='_blank' href='https://github.com/GabrielPrompt'> <FaGithub size={30} /> </a> </li>
                <li> <a target='_blank' href='https://www.linkedin.com/in/gabriel-bueno-de-camargo-417347291/'> <FaLinkedin size={30} /> </a> </li>
            </ul>
            <p> gabrielbcamargo144@gmail.com.br </p>
            <p> Gabriel Camargo © 2023 </p>
        </div>
    )
}

export default Footer