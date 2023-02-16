import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <h2>Garajismos</h2>
            <ul className='navbar-list-container'>
                <li>
                    <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/history">HISTÓRIA</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/hobbies">HOBBIES</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/music">MÚSICA</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/photos">FOTOS</Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Navbar;