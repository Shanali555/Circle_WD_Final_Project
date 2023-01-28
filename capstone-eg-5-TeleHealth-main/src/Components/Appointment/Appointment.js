import React from "react";
import "./AppointmentStyle.css";
import AppointmentImg from "../../Images/appointment.png";
import { FaUserAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <div id="appointment-section">
      <div className="container">
        <div className="appointment-container">
          <div className="appointment-left">
            <img src={AppointmentImg} alt="Appointment-Img" />
          </div>
          <div className="appointment-right">
            <h3>Make An Appointment</h3>
            <h2>
              Contact us for any medical help and fill out an appointment form
            </h2>
            <form action="">
              <div className="input-row">
                <div className="input-col">
                  <label>Full Name:</label>
                  <input type="text" name="name" placeholder="Talha Khan" />
                  <FaUserAlt className="input-icon" />
                </div>

                <div className="input-col">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="telehealth@gmail.com"
                  />
                  <FaEnvelope className="input-icon" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-col">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="name"
                    placeholder="+92 (000) 123 2022"
                  />
                  <FaPhoneAlt className="input-icon" />
                </div>
                <div className="input-col">
                  <label>
                    Booking Date:
                    <input type="date" name="name" />
                  </label>
                </div>
              </div>

              <div className="input-row">
                <div className="input-col">
                  <label>Department:</label>
                  <select value="Select Department">
                    <option value="" checked>
                      Select Department
                    </option>
                    <option value="">Department1</option>
                    <option value="">Department2</option>
                    <option value="">Department2</option>
                  </select>
                </div>
                <div className="input-col">
                  <label>Doctor:</label>
                  <select value="Select Doctor">
                    <option value="" checked>
                      Select Doctor
                    </option>
                    <option value="">Doctor 1</option>
                    <option value="">Doctor 2</option>
                    <option value="">Doctor 2</option>
                  </select>
                </div>
              </div>
              <div className="confirm-row">
                <div>
                  <button className="confirm-btn">Confirm Appointment</button>
                </div>
                <div className="checkboxes">
                  <div className="checkbox-row">
                    <input type="checkbox" name="" id="" />
                    <p>Male</p>
                    <input type="checkbox" name="" id="" />
                    <p>Female</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Do not wish to disclose
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
