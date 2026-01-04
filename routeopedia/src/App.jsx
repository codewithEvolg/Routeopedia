import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AppRouter from "./routes/AppRouter";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MainLayout />
        <main className="container flex-grow-1 d-flex flex-column">
          <AppRouter />
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
