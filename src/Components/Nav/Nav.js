import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return(
        <nav className="dark">
        <Link className="Link" to="/">
          <h2 className="text-big">Where in the world?</h2>
        </Link>
        <div>
          <span className="lnr lnr-moon"></span>
          <span className="text-normal">Dark Mode</span>
        </div>
      </nav>
    );
}

export default Nav;