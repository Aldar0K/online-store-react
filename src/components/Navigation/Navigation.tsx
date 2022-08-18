import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className='nav-link' to='/About'><h2>About</h2></Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/Products'><h2>Products</h2></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
