import React from 'react';

import classes from './MainHeader.module.css';

// React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server
// Loads pages without sending HTTP request to server
// Fake navigation method which prevents server to be overloaded
// Link component works just like NavLink but it does not highlight the active link
// NavLink has an activeClassName props that you can pass a class which works when that
// link is active
// ========================================
// import { Link } from 'react-router-dom';
// ========================================
// React-Router-Highlight-Link
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    {/* React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server */}
                    <NavLink activeClassName={classes.active} to="/welcome">
                        Welcome
                    </NavLink>
                </li>

                <li>
                    {/* React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server */}
                    {/* React-Router-Highlight-Link */}
                    <NavLink activeClassName={classes.active} to="/products">
                        Products
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainHeader;