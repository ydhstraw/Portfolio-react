

function Navbar () {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top mb-6">
            <div class="container">
                <a class="navbar-brand ms-3" href="#">ydhstraw</a>
                
                <div class="float-right justify-content-end ms-3" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-lg-0 me-3">
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
