import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
//Outlet理解成站位符

function Layout() {
  return (
    <div className="layout">
      <h1>todo</h1>
      <div className="nav-cont">
        <div className="con">
          <nav>
            <Link to="/">home</Link>&emsp;
            <Link to="/about">about</Link>&emsp;
            <Link to="/done">done</Link>&emsp;
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
