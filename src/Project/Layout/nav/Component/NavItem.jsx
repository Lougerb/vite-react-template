import React, {useState, useRef} from "react";
function NavItem({link, name}) {
    return ( 
        <>
            <li className="nav-menu__item hover:opacity-[0.7]">
                <a href={link} className="nav-menu__item__anchor">{name}</a>
            </li>
        </>
     );
}

export default NavItem;