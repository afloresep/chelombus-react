import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaGlobe, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <ul>
      <li>
          <a href="https://github.com/afloresep">
            <FaGithub className='icon2' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className='icon2' />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/afloresep">
            <FaLinkedinIn className='icon2' />
          </a>
        </li>
        <li>
          <a href="https://afloresep.github.io">
            <FaGlobe className='icon2' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
