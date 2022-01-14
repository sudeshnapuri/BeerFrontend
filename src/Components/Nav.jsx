import {Link} from "react-router-dom";

const Nav = () => {
    return ( 
        <div>
        <h3>Navigation</h3>
        <Link to = "/">
            <button type = "button"> Home </button>
        </Link>
        <Link to = "/about">
            <button type = "button"> About </button>
        </Link>
        <Link to = "/menu">
            <button type = "button"> Beer Menu </button>
        </Link>
        <Link to = "/contactUs">
            <button type = "button"> Contact Us </button>
        </Link>
        </div>
     );
}
 
export default Nav;