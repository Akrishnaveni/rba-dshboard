import React, { useState, useEffect } from "react";
import { fetchRoles } from "../api/mockApi";
import "./RoleManagement.css";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [permissionsList] = useState(["Read", "Write", "Delete"]);

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleAddRole = () => {
    const role = { ...newRole, id: Date.now() };
    setRoles((prev) => [...prev, role]);
    setNewRole({ name: "", permissions: [] });
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => {
      const permissions = prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission];
      return { ...prev, permissions };
    });
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <div>
          {permissionsList.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                checked={newRole.permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
              />
              {permission}
            </label>
          ))}
        </div>
        <button onClick={handleAddRole}>Add Role</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
