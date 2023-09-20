import "./Footer.css";
import React from "react";
import Utils from '../../utils/Utils';


const Footer = () => {
    return (
        <p>{Utils.getCurrentYear()} © Flyp. All rights reserved</p>
    )
}

export default Footer;
