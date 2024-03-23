import React, { useState } from "react";
import Layout from "../../component/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, number, address);
    // toast.success("Register Successfully");

    try {
      const res = await axios.post(
        "https://e-commerce-backend-2ltj.onrender.com/api/v1/register",
        {
          name,
          email,
          password,
        }
      );
      if (email !== res.data.user.email || res.data.success) {
        // toast.success(res.data.success);
        alert(res.data.success);
        navigate("/login");
      } else {
        // toast.error(res.data.success);
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !");
    }
  };
  //   console.log(process.env.REACT_APP_API);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "68vh",
        }}
      >
        <form
          style={{
            background: "red",
            padding: "2vh",
            minHeight: "48vh",
            // minWidth: "25vw",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <h5
            style={{
              color: "white",
              textShadow:
                "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000",
            }}
          >
            Registration Page
          </h5>

          <div>
            <input
              style={{
                padding: "4px 10px",
                border: "none",
                borderRadius: "15px",
                textDecoration: "none",
                outline: "none",
              }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a Name"
              required
            />
          </div>
          <div>
            <input
              style={{
                padding: "4px 10px",
                border: "none",
                borderRadius: "15px",
                textDecoration: "none",
                outline: "none",
              }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a Email"
              required
            />
          </div>
          <div>
            <input
              style={{
                padding: "4px 10px",
                border: "none",
                borderRadius: "15px",
                textDecoration: "none",
                outline: "none",
              }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a Password"
              required
              autoComplete="off"
            />
          </div>
          {/* <div>
            <input
              style={{
                padding: "4px 10px",
                border: "none",
                borderRadius: "15px",
                textDecoration: "none",
                outline: "none",
              }}
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a Number"
              required
            />
          </div>

          <div>
            <input
              style={{
                padding: "4px 10px",
                border: "none",
                borderRadius: "15px",
                textDecoration: "none",
                outline: "none",
              }}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter a Address"
              required
            />
          </div> */}
          <button
            type="submit"
            style={{
              padding: "5px 15px",
              borderRadius: "15px",
              border: "none",
              fontWeight: "700",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
