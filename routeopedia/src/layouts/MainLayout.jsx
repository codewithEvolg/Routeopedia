import reactLogo from "../assets/react.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuthState, logout, hasRole } from "../pages/utility/AuthUtility";

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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Product
              </NavLink>
            </li>
            {isAuthenticated && hasRole("admin") && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  AdminPortal
                </NavLink>
              </li>
            )}
            {isAuthenticated && hasRole("customer") && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/customer">
                  CustomerPortal
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2">
          {isAuthenticated ? (
            <>
              <span className="me-2 text-secondary small d-flex align-items-center">
                <i className="bi bi-person-circle me-1"></i>
                Hello, {currentUser?.name}
              </span>
              <button onClick={handleLogout} className="btn btn-outline-danger">
                Logout
              </button>
            </>
          ) : (
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainLayout;
