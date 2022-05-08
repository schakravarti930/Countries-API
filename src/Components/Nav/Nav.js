import "./Nav.css";

const Nav = () => {
    return(
        <nav className="dark">
        <h2 className="text-big">Where in the world?</h2>
        <div>
          <span className="lnr lnr-moon"></span>
          <span className="text-normal">Dark Mode</span>
        </div>
      </nav>
    );
}

export default Nav;