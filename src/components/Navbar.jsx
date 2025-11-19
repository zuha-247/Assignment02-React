import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
    <img src={logo} className="logo" alt="Logo" />
                <ul id="menulist">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/paintings">Paintings</Link></li>
                  <li><Link to="/registry">Registration</Link></li>
                  <li><Link to="/fees">Fees & Purchase</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="nav-right">
                  <Link to="/fees" className="primary-btn">BOOK NOW 📌</Link>
                </div>
    </nav>
  );
}
