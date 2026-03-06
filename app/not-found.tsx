export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ color: "#afbdd1", marginBottom: "1.5rem" }}>
          This route could not be found.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "0.85rem 1.2rem",
            borderRadius: "999px",
            background: "#68d8ff",
            color: "#04111d",
            fontWeight: 700
          }}
        >
          Go Home
        </a>
      </div>
    </main>
  );
}
