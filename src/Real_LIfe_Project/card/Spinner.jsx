function Spinner() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}

export default Spinner;

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    width: "40px",
    height: "40px",
    border: "4px solid #e5e7eb",
    borderTop: "4px solid #2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
