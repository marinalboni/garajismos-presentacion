import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <h2>Garajismos</h2>
            <ul className='navbar-list-container'>
                <li>HISTÓRIA</li>
                <li>HOBBIES</li>
                <li>MÚSICA</li>
                <li>FOTOS</li>
            </ul>
        </div>
    );
}

export default Navbar;