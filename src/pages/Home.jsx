import React from "react";
import Layout from "../component/layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>Home</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
