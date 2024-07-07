import { Link } from "react-router-dom";

import logo from "../assets/images/logo_duci_art.png";
import Slider from "./Slider";

const Header = () => {
  return (
    <header>
      <div className="header-nav-links">
        <div className="header-logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <nav>
          <Slider />
          <ul className="menu">
            <li>
              <Link
                to="/"
                className="clr-1"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="clr-2"
              >
                Về Duci
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="clr-3"
              >
                Lịch học
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="clr-4"
              >
                Thư viện
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="clr-5"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
