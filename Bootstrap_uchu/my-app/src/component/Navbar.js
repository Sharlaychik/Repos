function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">BRAND</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                        <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mb-2">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Glavnaya</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mb-2">
                        <li className="nav-item">
                            <a href="#" className="nav-link">O nas</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto mb-2">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Kontakti</a>
                        </li>
                    </ul>
                </div>
                
                    
                
            </div>
        </nav>
    );
}

export default Navbar;