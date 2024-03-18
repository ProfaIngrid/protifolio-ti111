import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className='containerHeader'>
            <div className='styleHeader'>
                <img src={Logo}/>
                <h2>{props.titulo}</h2>
            </div>
            <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
        </header>
    )
}

export default Header;