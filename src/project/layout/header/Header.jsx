import logo from './img/pc/logo-header.svg';

function Header() {
    return (
        <header className="header">
            <h1 className="head1">
                <a href="/" className="header-logo">
                    <img src={logo} alt="" />
                </a>
            </h1>
        </header>
    );
}

export default Header;