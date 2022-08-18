import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to='/About'>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Products'>Products</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
