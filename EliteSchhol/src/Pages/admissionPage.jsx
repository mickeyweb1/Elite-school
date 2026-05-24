import { FaChild, FaUsers } from "react-icons/fa";
import { useState } from "react";
import "../style/admission.css";

export default function Admissions() {

  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = () => {
  console.log(formData);
};

  const gradeSelector = [
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];

  const relationToChild = [
    "Mother",
    "Father",
    "Legal Guardian",
  ];

  return (
    <div className="admissions-page">

      {/* Header */}
      <h2 className="enroll">ENROLL TODAY</h2>

      <h1>Admissions Application</h1>

      <p className="under-admiss-appli">
        Fill in the form below to apply for enrollment at Brightfield Academy.
        We'll be in touch shortly.
      </p>

      {/* Container */}
      <div className="contain-all-application-info">

        {/* Child Information */}
        <div className="child-information">

          <h2>
            <FaChild />
            Child Information
          </h2>

          {/* First & Last Name */}
          <div className="first-last-name">

            <div className="name">
              <label>First Name *</label>
              <input
                className="all-input"
                type="text"
                placeholder="e.g. Ogunleye"
                name= "firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="name">
              <label>Last Name *</label>
              <input
                className="all-input"
                type="text"
                placeholder="e.g. Kayode"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Date & Gender */}
          <div className="date-gender">

            <div className="name">
              <label>Date of Birth *</label>

              <input
                className="date-stuff"
                type="date"
              />
            </div>

            <div className="gender">

              <label>Gender *</label>

              <select>
                <option value="">Select gender ⇩</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">
                  Other / Prefer not to say
                </option>
              </select>

            </div>

          </div>

          {/* Grade */}
          <div className="grade-select">

            <label>Grade Level *</label>

            <select>

              <option value="">
                Select grade ⇩
              </option>

              {
                gradeSelector.map((grade, index) => (
                  <option key={index}>
                    {grade}
                  </option>
                ))
              }

            </select>

          </div>

          {/* Previous School */}
          <div className="name">

            <label>Previous School (if any)</label>

            <input
              className="all-input"
              type="text"
              placeholder="e.g. Petra School Ota"
            />

          </div>

        </div>

        {/* Parent / Guardian */}
        <div className="parent-guardian-section">

          <h2>
            <FaUsers />
            Parent/Guardian Information
          </h2>

          <div className="name-relation-to-child">

            <div className="name">

              <label>Full Name *</label>

              <input
                className="all-input"
                type="text"
                placeholder="e.g. Okafor Seun"
              />

            </div>

            <div className="relation-child">

              <label>Relationship to Child *</label>

              <select>
                {
                  relationToChild.map((relation, index) => (
                    <option key={index}>
                      {relation}
                    </option>
                  ))
                }
              </select>

            </div>

          </div>

          {/* Email & Phone */}
          <div className="email-phone-info">

            <div className="name">

              <label>Email Address *</label>

              <input
                className="all-input"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="name">

              <label>Phone Number *</label>

              <input
                className="all-input"
                type="text"
                placeholder="+234 7062 640 714"
              />

            </div>

          </div>

          {/* Address */}
          <div className="name">

            <label>Home Address *</label>

            <input
              className="all-input"
              type="text"
              placeholder="e.g. 45 Maple Street, Springfield"
            />

          </div>

        </div>

        {/* Additional Info */}
        <div className="addition">

          <h1>Additional Information</h1>

          <div className="medical-addition">

            <div className="medical">

              <h2>Medical Conditions/Allergies</h2>

              <textarea
                placeholder="Please list any medical conditions, allergies, or special needs..."
              />

            </div>

            <div className="notes">

              <h2>Additional Notes</h2>

              <textarea
                placeholder="Anything else you'd like us to know..."
              />

            </div>

          </div>

        </div>

        {/* Submit Button */}
        <button id="btn" onClick ={handleSubmit}>
          Submit Application
        </button>

      </div>

    </div>
  );
}
