import reactLogo from "../assets/react.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuthState, logout } from "../pages/utility/AuthUtility";

const MainLayout = () => {
  const { isAuthenticated, currentUser } = getAuthState();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={reactLogo} height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex align-items-center gap-2">
          {currentUser?.role && (
            <p className="mb-0 p-2">{currentUser?.email}</p>
          )}

          {isAuthenticated ? (
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          ) : (
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
          )}
        </div>

        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default MainLayout;
