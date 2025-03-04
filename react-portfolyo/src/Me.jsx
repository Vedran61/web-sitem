import './App.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaVk, FaTelegram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Me = () => {
    return (
        <div className="me">
            <h1><span>Ömer Han Yıldırım</span></h1>
            <h2><span>Software Developer</span></h2>
            <div className="social-icons">
                <a href="mailto:omerhanyildirim61@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                <a href="https://github.com/Vedran61" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/omerhanyildirim/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/thunderbolt.61/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/omerhanyildirim61" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://x.com/omerhanyld" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                <a href="https://www.youtube.com/@vedran6163" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://t.me/vedran61" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                <a href="https://vk.com/omerhanyildirim61" target="_blank" rel="noopener noreferrer"><FaVk /></a>
            </div>
        </div>
    );
}

export default Me;
