import { useState } from "react";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        Header
        <main className="container flex-grow-1 d-flex flex-column">
          CONTENT
        </main>
        <footer
          className="mt-auto py-3 border-top text-center text-muted"
          style={{ width: "100%" }}
        >
          <p className="mb-0">
            © {year} Olutech Academy. Built with React Router
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
