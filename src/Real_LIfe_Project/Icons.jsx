import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

function Icons() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12);

  const [commentCount, setCommentCount] = useState(3);
  const [shareCount, setShareCount] = useState(1);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div style={styles.box}>
      {/* Like */}
      <div style={styles.icon} onClick={handleLike}>
        <FaThumbsUp color={liked ? "#1877f2" : "#65676b"} />
        <span style={{ color: liked ? "#1877f2" : "#65676b" }}>
          Like {likeCount}
        </span>
      </div>

      {/* Comment */}
      <div
        style={styles.icon}
        onClick={() => setCommentCount(commentCount + 1)}
      >
        <FaComment />
        <span>Comment {commentCount}</span>
      </div>

      {/* Share */}
      <div
        style={styles.icon}
        onClick={() => setShareCount(shareCount + 1)}
      >
        <FaShare />
        <span>Share {shareCount}</span>
      </div>
    </div>
  );
}

export default Icons;

const styles = {
  box: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    marginTop: "40px",
    fontSize: "18px",
  },
  icon: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#65676b",
    userSelect: "none",
  },
};
