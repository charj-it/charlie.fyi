import React, { Component } from 'react';
import Nav from './Nav';

import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer>
                <h1 className="Text-Center">&copy; charlie.fyi - All Rights Reverved</h1>
                <Nav />
            </footer>
        )
    }
}

export default Footer;
