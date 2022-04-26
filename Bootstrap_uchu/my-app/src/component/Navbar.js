function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-info" >
            <div className="container-fluid">
                
                <a className="navbar-brand mb-auto h1" >BRAND</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                        <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page" >Glavnaya</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">O nas</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Kontakti</a>
                        </li>
                    </ul>
                </div>
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"></input>
                    <button className="btn btn-outline-success" type="submit">Поиск</button>
                </form>
                
            </div>
        </nav>
    );
}

export default Navbar;