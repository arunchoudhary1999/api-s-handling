import React from "react";
import Layout from "../component/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contactus">
        <div className="col-md-5">
          <img
            src="https://media.istockphoto.com/id/1127735342/photo/contact-us-communication-support-businessman-corporate-business-message.jpg?s=612x612&w=0&k=20&c=1SLDv-JCdHwSYc9U52Det7JtTnF7f5fy6sY09YZi8H8="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white textcenter">Contact Us</h1>
          <p className="text-justify mt-2">
            any query and info about product deel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">📫 www.help@ecommerceapp.com</p>
          <p className="mt-3">📱 012-5462485</p>
          <p className="mt-3">➕ 1800-0000-0000 (toll free)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
