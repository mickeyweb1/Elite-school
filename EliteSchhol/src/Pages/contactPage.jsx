import "../style/contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "ADDRESS",
      text: "123 Academy Road, Springfield, ST 12345",
    },

    {
      icon: <FaPhoneAlt />,
      title: "PHONE",
      text: "+234 7062 640 714",
    },

    {
      icon: <FaEnvelope />,
      title: "EMAIL",
      text: "info@elitefoundation.edu",
    },

    {
      icon: <FaClock />,
      title: "OFFICE HOURS",
      text: "Mon – Fri: 7:30 AM – 4:30 PM",
    },
  ];

  return (
    <div className="contact-page">
      <h1>GET IN TOUCH</h1>
      <h2>Contact Us</h2>
      <p className="first-p">
        Have a question or want to learn more about Elite Foundation? We'd
        love to hear from you.
      </p>

      <div className="contant-info">
          <div className="location-phone-etc">
            {contactInfo.map((item, index) => (
              <div className="address" key={index}>
                <h2>{item.icon}</h2>

                <div className="address-info">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        <div className="contant-form">
          <div className="fullName-eMail">
            <div className="fullName">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullNamr" placeholder="John Smith" />
            </div>

            <div className="fullName">
              <label htmlFor="email">Email Address *</label>
              <input type="text" placeholder="Join@example.com" />
            </div>
          </div>

          <div className="fullName-eMail">
            <div className="fullName">
              <label>Phone Number *</label>
              <input type="text" placeholder="Phone Number" />
            </div>

            <div className="fullName">
              <label>Subject *</label>
              <input type="text" placeholder="e.g Physics" />
            </div>
          </div>

            <label>Message *</label>
          <textarea placeholder="Write your medssage here" />

          <button className="contabt-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}
