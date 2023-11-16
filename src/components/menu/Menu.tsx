import React, { useState, useEffect } from 'react';
import "./menu.css"
import { Link } from 'react-router-dom';



const Menu = () => {
    const [activeLink, setActiveLink] = useState("");
    const [menuState, setMenuState] = useState("menu_section_close")





    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.includes("shipments")) {
            setActiveLink("shipments")
        } else if (currentPath.includes("items")) {
            setActiveLink("items")
        } else if (currentPath.includes("spaces")) {
            setActiveLink("spaces")
        } else if (currentPath.includes("notifications")) {
            setActiveLink("notifications")
        } else if (currentPath.includes("profile")) {
            setActiveLink("profile")
        } else {
            setActiveLink("")
        }
    }, [])

    const handleLinkClick = (link: any) => {
        setActiveLink(link)
    }

    //меняет соостояние менюшки открвыто/закрыто
    const handlMenu_state = () => {
        setMenuState(menuState === "menu_section_close" ? "menu_section_open" : "menu_section_close");
    }

    return (
        <div className={menuState}>
            <div className='menu_logo' />
            <div className='hr'></div>

            <div className='nav_menu'>
                <Link to={"shipments"} className={`link_menu ${activeLink === "shipments" ? "active_link" : ""}`} onClick={() => handleLinkClick("shipments")}>
                    <div className='logo_link'></div>
                    <p className='item_link'>Shipments</p>
                </Link>
                <Link to={"items"} className={`link_menu ${activeLink === "items" ? "active_link" : ""}`} onClick={() => handleLinkClick("items")}>
                    <div className='logo_link'></div>
                    <p className='item_link'>Items</p>
                </Link>
                <Link to={"spaces"} className={`link_menu ${activeLink === "spaces" ? "active_link" : ""}`} onClick={() => handleLinkClick("spaces")}>
                    <div className='logo_link'></div>
                    <p className='item_link'>Spaces</p>
                </Link>
                <Link to={"notifications"} className={`link_menu ${activeLink === "notifications" ? "active_link" : ""}`} onClick={() => handleLinkClick("notifications")}>
                    <div className='logo_link'></div>
                    <p className='item_link'>Notifications</p>
                </Link>

                <div className='menu_footer'>
                    <Link to={"profile"} className={`link_menu ${activeLink === "profile" ? "active_link" : ""}`} onClick={() => handleLinkClick("profile")}>
                        <div className='logo_link'></div>
                        <p className='item_link'>Profile</p>
                    </Link>
                    <div className='hr'></div>
                    <div className='menu_control' onClick={handlMenu_state} >
                        <div className='logo_link'></div>
                        <p className='item_link'>Close</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Menu;