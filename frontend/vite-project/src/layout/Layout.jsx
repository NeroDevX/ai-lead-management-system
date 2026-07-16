import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import"./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Header />
        {children}
      </div>

    </div>
  );
}

export default Layout;