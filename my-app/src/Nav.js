import React, { Component } from 'react';

import './Nav.scss';

class Nav extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li href="/">/</li>
                    <li href="/photo">Photo</li>
                    <li href="/code">Code</li>
                    <li href="/tech">Tech</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
