import { FiMenu, FiBell, FiSearch } from "react-icons/fi";
import"./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <button className="menu-btn">
          <FiMenu />
        </button>

        <h2>Dashboard</h2>
      </div>

      <div className="header-right">

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search leads..."
          />
        </div>

        <button className="notification-btn">
          <FiBell />
        </button>

        <div className="profile">

          <div className="avatar">
            K
          </div>

          <div>
            <h4>Kirill</h4>
            <span>Admin</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;