import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/InstagramProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialProfile = location.state || {
    username: "",
    bio1: "",
    bio2: "",
    website: "",
  };

  const [form, setForm] = useState(initialProfile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-page">
      <div className="edit-header">
        <button onClick={() => navigate(-1)}>Cancel</button>
        <h3>Edit Profile</h3>
        <button onClick={() => navigate("/", { state: form })}>Done</button>
      </div>

      <div className="edit-form">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="bio1"
          value={form.bio1}
          onChange={handleChange}
          placeholder="Bio"
        />
        <input
          name="bio2"
          value={form.bio2}
          onChange={handleChange}
          placeholder="Bio line 2"
        />
        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="Website"
        />
      </div>
    </div>
  );
};

export default EditProfile;
