import './Header.css';

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className='header'>
            <div className='conteiner header__conteiner'>
                <h1>Online Store</h1>
                { children }
            </div>
        </header>
    )
}

export default Header;
