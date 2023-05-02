import Nav from "../nav/Nav"

export default function Header() {
    return <header className="header position-fixed">
        <h1 className="header-logo">
            <a href="/" className="header-logo__anchor">LOGO</a>
        </h1>
        <Nav />
    </header>
}