import React, {useState, useRef} from "react";
import NavItem from "./Component/NavItem";
function Nav() {

    const [nav, setNav] = useState(false);
    const navEl = useRef();

    const trigger = () => {
        nav?setNav(false):setNav(true);
    }

    return ( 
        <nav ref={navEl} className={`nav ${!nav?'':'show-nav'} `}>
            <div className="nav-wrapper">
                <div className="nav-trigger sp-only" onClick={trigger}>
                    <div className="wrapper">
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                    </div>
                </div>
                <ul className="nav-menu ">
                    <NavItem link="/about/" name="ABOUT"/>
                    <NavItem link="/product/" name="PRODUCT"/>
                    <NavItem link="/services/" name="SERVICES"/>
                    <NavItem link="/contact/" name="CONTACT"/>
                
                </ul>
            </div>
        </nav>
     );
}

export default Nav;