import './Header.css';

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className='header'>
            <h1>Online Store</h1>
            { children }
        </header>
    )
}

export default Header;
