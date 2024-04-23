import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ border: "2px solid red" }}>
      <Menu />
      <div style={{ border: "8px solid blue" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};
