import React, { useState } from "react";

function Post() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [shares, setShares] = useState(2);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const addComment = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className="fb-post">
      <h4>👤 Milan Adhikari</h4>
      <p className="post-text">
        Building Facebook-like features in React 🔥
      </p>

      {/* Counts section */}
      <div className="counts">
        <span>👍 {likes}</span>
        <span>💬 {comments.length} Comments</span>
        <span>🔄 {shares} Shares</span>
      </div>

      {/* Action buttons */}
      <div className="buttons">
        <button onClick={handleLike}>
          {liked ? "👍 Liked" : "👍 Like"}
        </button>

        <button onClick={() => document.getElementById("cmt").focus()}>
          💬 Comment
        </button>

        <button onClick={handleShare}>🔄 Share</button>
      </div>

      {/* Comment input */}
      <div className="comment-box">
        <input
          id="cmt"
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addComment}>Post</button>
      </div>

      {/* Comment list */}
      {comments.map((c, i) => (
        <p key={i} className="comment">💬 {c}</p>
      ))}
    </div>
  );
}

export default Post;
