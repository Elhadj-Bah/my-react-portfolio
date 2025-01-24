import { Outlet } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
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
