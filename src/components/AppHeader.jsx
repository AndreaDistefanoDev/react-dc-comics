import appLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {


    return (
        <header>
            <nav className="navbar navbar-expand bg-body fw-semibold">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={appLogo} alt="" /></a>
                    <div className="d-flex gap-3 text-uppercase">
                        <a className="nav-link" href="#">characters</a>
                        <a className="nav-link" href="#">comics</a>
                        <a className="nav-link" href="#">movies</a>
                        <a className="nav-link" href="#">tv</a>
                        <a className="nav-link" href="#">games</a>
                        <a className="nav-link" href="#">collectibles</a>
                        <a className="nav-link" href="#">videos</a>
                        <a className="nav-link" href="#">fans</a>
                        <a className="nav-link" href="#">news</a>
                        <a className="nav-link" href="#">shop</a>

                    </div>
                </div>
            </nav>
        </header>
    )
}