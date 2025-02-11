import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Layout;
