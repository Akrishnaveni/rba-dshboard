import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <nav>
          <Link to="/">User Management</Link> |{" "}
          <Link to="/roles">Role Management</Link> |{" "}
          <Link to="/permissions">Permission Management</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
