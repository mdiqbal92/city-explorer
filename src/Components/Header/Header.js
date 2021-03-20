import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    // const history = useHistory();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid d-flex justify-content-around">
                    <div><Link to ="/home" class="navbar-brand">City Explorer</Link></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to = "/home" class="nav-link">Home</Link>
                            <Link to="/destination" class="nav-link">Destination</Link>
                            <a class="nav-link" href="#">Blog</a>
                            <a class="nav-link " href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;