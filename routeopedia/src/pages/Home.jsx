import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">
        <i className="bi bi-house-door-fill me-2"></i>Home Page
      </h1>
      <div className="border rounded shadow p-4" style={{ textAlign: "left" }}>
        <p>Welcome to the React Router exercise!</p>
        <h4 className="mt-4">
          <i className="bi bi-sheld-lock-fill me-2"></i>Try Role
        </h4>
        <p>Login as either:</p>
        <ul>
          <li>
            <strong>Admin</strong>
            <i className="bi bi-person-gear ms-1"></i> Access admin dashboard
            and user management
          </li>
          <li>
            <strong>Customer</strong>
            <i className="bi bi-person-badge ms-1"></i> Access customer portal
            features
          </li>
        </ul>
        <p>Try accessing /admin or /customer-portal with different roles</p>
        <div className="mb-4">
          <button onClick={handleContactClick} className="btn btn-secondary">
            Go to Contact page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
