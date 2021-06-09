import React, {useState}  from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    const [color, changeColor] = useState("#362641");
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top " style={{ background: color }}>
            <div className="container-fluid navbar-main">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> 
                <Link className="navbar-brand" exact to="/" onClick={() => changeColor("#9c27b0")}>WebSiteName</Link>
            </div>
            <div class="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink className="nav-link" exact to="/" onClick={() => changeColor("#362641")}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to="/contact" onClick={() => changeColor("#725686")}>CONTACT US</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header;