import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/InstagramProfile.css";

const InstagramProfile = () => {
  const navigate = useNavigate();

  // user profile state
  const [profile, setProfile] = useState({
    username: "Milan Xetri",
    bio1: "Frontend Alchemist ✨",
    bio2: "React • JS • UI Lover",
    website: "www.kazicode.dev",
    posts: 54,
    followers: "112.3K",
    following: 180,
    avatar: "https://i.pravatar.cc/150?img=32",
  });

  // dummy posts images
  const postsImages = [...Array(9)].map(
    (_, i) => `https://picsum.photos/300?random=${i}`
  );

  return (
    <div className="ig-profile">

      {/* Top Header */}
      <div className="ig-header">
        <img src={profile.avatar} alt="profile" className="ig-avatar" />
        <div className="ig-stats">
          <div>
            <strong>{profile.posts}</strong>
            <span>Posts</span>
          </div>
          <div>
            <strong>{profile.followers}</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>{profile.following}</strong>
            <span>Following</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="ig-bio">
        <h2>{profile.username}</h2>
        <p>{profile.bio1}</p>
        <p>{profile.bio2}</p>
        <a href="#">{profile.website}</a>
      </div>

      {/* Action Buttons */}
      <div className="ig-actions">
        <button
          className="edit-profile"
          onClick={() => navigate("/edit-profile", { state: profile })}
        >
          Edit profile
        </button>
        <button className="edit-profile">Share Profile</button>
      </div>

      {/* Story Highlights (optional) */}
      <div className="ig-stories">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="story">
            <img
              src={`https://i.pravatar.cc/60?img=${i + 1}`}
              alt={`story-${i}`}
            />
            <span>Story {i + 1}</span>
          </div>
        ))}
      </div>

      {/* Profile Tabs */}
      <div className="ig-tabs">
        <button className="active">Posts</button>
        <button>Reels</button>
        <button>Tagged</button>
      </div>

      {/* Post Grid */}
      <div className="ig-posts">
        {postsImages.map((img, i) => (
          <img key={i} src={img} alt={`post-${i}`} />
        ))}
      </div>

    </div>
  );
};

export default InstagramProfile;
