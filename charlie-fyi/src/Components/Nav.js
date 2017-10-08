import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li href="/photo">Photo</li>
                    <li href="/code">Code</li>
                    <li href="/tech">Tech</li>
                </ul>
            </nav>
        )
    }
}

export default Nav;
