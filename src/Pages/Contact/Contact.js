import React, { useState } from "react";
import Home from "../Home/Home";
import "./Contact.scss";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, address, message } = userData;
    if(firstName && lastName && email && address && message){
    const res = fetch(
      "https://my-portfolio-9090c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          address,
          message,
        }),
      }
    );
    if (res) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        message: "",
      });
      alert("Thanks, your message is sent successfully.");
    } else {
      alert("Please fill the data!");
    }
  }
  else {
    alert("Please fill the data!");
  }
  };
  return (
    <>
      <Home />
      <section
        className="card-inner contacts"
        id="contacts-card"
      >
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title">
              <span className="first-word">Get </span>
              in Touch
            </div>
            <div className="row">
              <div className="col col-12 border-line-v">
                <div className="map">
                  <div style={{ width: "100%" }}>
                    <iframe
                      title="map"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.748839,%2077.191691+(kamal%20pur,%20Kamal%20vihar%20burari)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/farm-gps/">GPS Navigation</a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="content contacts">
              <div className="title">
                <span className="first-word">Contact </span>
                Form
              </div>
              <div className="row">
                <div className="col col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post" noValidate="novalidate">
                      <div className="row">
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={userData.firstName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6 ">
                          <div className="group-val">
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={userData.lastName}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                              value={userData.email}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-6">
                          <div className="group-val">
                            <input
                              type="text"
                              name="address"
                              placeholder="Address"
                              value={userData.address}
                              onChange={postUserData}
                            ></input>
                          </div>
                        </div>
                        <div className="col col-12">
                          <div className="group-val">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                              value={userData.message}
                              onChange={postUserData}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <button className="button" onClick={submitData}>
                          <span className="text">Send Message</span>
                          <span className="icon">
                            <FaTelegramPlane />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
