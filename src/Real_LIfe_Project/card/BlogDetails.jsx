import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "./data";
import Spinner from "./Spinner";
import "../css/CardSimple.css";
function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⏳ fake API delay
    setTimeout(() => {
      const foundBlog = blogs.find(
        (item) => item.id === Number(id)
      );
      setBlog(foundBlog);
      setLoading(false);
    }, 1500);
  }, [id]);

  // 🌀 Loading state
  if (loading) {
    return <Spinner />;
  }

  // ❌ Blog not found
  if (!blog) {
    return <h2 style={{ padding: "40px" }}>Blog not found 😢</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{blog.title}</h1>
      <img src={blog.Image} alt={blog.title} style={{ width: "100%", height: "400px", objectFit: "cover", marginBottom: "20px" }} />
      <p>{blog.full}</p>

      <button onClick={() => navigate("/")}>
        Back to Blogs
      </button>
    </div>
  );
}

export default BlogDetails;
