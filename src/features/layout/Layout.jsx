import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import AntMenu from "../todo/AntMenu";
//Outlet理解成站位符

function Layout() {
  return (
    <div className="layout">
      <h1>todo</h1>
      <div className="nav-cont">
        <div className="con">
        {/* <AntBreadCru /> */}
        {/* <AntMenu /> */}
          <nav>
            <Link to="/">HOME</Link>&emsp;
            <Link to="/done">DONE</Link>&emsp;
            <Link to="/about">ABOUT</Link>&emsp;
          </nav>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
