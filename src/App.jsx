import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Project />
        <Footer />
      </main>
    </>
  );
}
export default App;
