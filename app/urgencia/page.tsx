export default function GOCPage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="http://localhost:8080"
        title="urgencia"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}