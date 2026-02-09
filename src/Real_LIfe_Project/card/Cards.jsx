import blogs from "./data";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {blogs.map((blog) => (
        <div key={blog.id} style={styles.card}>
          <h3>{blog.title}</h3>
                <img src={blog.Image} alt={blog.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
          <p>{blog.short}</p>

          <button
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "40px",
  },
  card: {
    width: "250px",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
};
