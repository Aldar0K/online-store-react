import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__data'>
                <span>@</span>
                <span>2022</span>
                <a className='github-link' href="https://rs.school/js/">github</a>
            </div>
            <div className='footer__rss'>
                <a className='rss-link' href='https://rs.school/js/'>
                    <img 
                        src='https://rs.school/images/rs_school_js.svg' 
                        alt="rs_school_js.svg"
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
