import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/Project";

function App() {
  return (
    <>
      <main>
        <Navigation />
        <Header />
        <Outlet />
        <Project />
        <Footer />
      </main>
    </>
  );
}
export default App;
