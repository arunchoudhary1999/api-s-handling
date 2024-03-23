import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "73.8vh" }}>
        <ToastContainer position="top-center" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
