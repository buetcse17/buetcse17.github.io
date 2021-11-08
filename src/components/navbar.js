import { SHEET_ID } from "../config.json";


const sheet_url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}`

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid" style={{ marginLeft: "100px" }}>
                <a className="navbar-brand" href="/">
                    <h4>CITAD <i className=" bi bi-explicit"></i> X </h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ fontSize: "1.1rem" }}>
                        <a className="nav-link" href="/classes">Classes</a>
                        <a className="nav-link" href="/notices">Notices</a>
                        <a className="nav-link" href="/files">Files</a>
                        <a className="nav-link" href={sheet_url} target="_blank" rel="noreferrer">Sheets</a>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;