import {
  FaGraduationCap,
  FaRegStar,
  FaRegUser,
  FaRegLightbulb,
} from "react-icons/fa";
import "../style/about.css";
import { NavLink } from "react-router-dom";

export default function About() {
  const purposes = [
    {
      icon: <FaGraduationCap />,
      purpose: "Our Mission",
      text: "To provide an exceptional, inclusive education that empowers every student to reach their full potential and become responsible global citizens.",
    },
    {
      icon: <FaRegLightbulb />,
      purpose: "Our Vision",
      text: "To be the leading school that transforms lives through innovative learning, strong values, and a vibrant community.",
    },
    {
      icon: <FaRegStar />,
      purpose: "Our Values",
      text: "Integrity, excellence, compassion, creativity, and respect form the foundation of everything we do at Brightfield Academy.",
    },
  ];

  const teacherInfo = [
    {
      teacherimg: "https://images.unsplash.com/photo-1573496130141-209d200cebd8",
      teacherName: "Dr. Margarent Ellis",
      teacherRole: "PRINCIPAL",
      teacherAchieve: "20+ years in education. Passionate about nurturing every child's potential."

    },
    {
      teacherimg: "https://images.unsplash.com/photo-1662549905121-4f15b045b815",
      teacherName: "Mr. James Okafor",
      teacherRole: "VICE PRINCIPAL",
      teacherAchieve: "Leads academic programs and staff development with dedication and vision."
    }, 
    {
      teacherimg: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98",
      teacherName: "Ms. Sarah Patel",
      teacherRole: "HEAD OF ADMISSIONS",
      teacherAchieve: "Guides families through the enrollment process with warmth and clarity."
    },
    {
      teacherimg: "https://images.unsplash.com/photo-1746729739298-986d64528894",
      teacherName: "Dr. David Chem",
      teacherRole: "Head of Sciences",
      teacherAchieve: "Inspires curiosity and critical thinking in every science class."
    }
  ]

  return (
    <div className="about-main-container">
      <div className="about-section1">
        <h2 className="icon">
          <FaRegUser />
        </h2>
        <h1>About Elite Foundation</h1>
        <h3>For over two decades, we've been shaping young</h3>
        <h3>minds and building a community of lifelong learners.</h3>
      </div>

      <div className="about-section2">
        <h3 className="who-we-are">Who We Are</h3>
        <h2>Guided by Purpose</h2>

        <div className="school-principle">
          {purposes.map((item, index) => (
            <div className="principle" key={index}>
              <h4 className="principle-icon">{item.icon}</h4>

              <h3 className="mission">{item.purpose}</h3>

              <p className="principle-content">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section3">
        <div className="about-section3-img">
          <img
            src="https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/520120208_1204010354863814_4569978460488704689_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MeSBuiQTlW0Q7kNvwGDAT8p&_nc_oc=AdoGAcEa7tpkcMyM1Cauyn6qonJS2OmZkDVCLjhJ9829UusD0npsKU-H-6PQqBoVxqs&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=Yt4C6xVCle_EMqjl2IipEg&_nc_ss=7b289&oh=00_Af6Pk56gKij-ycxwZ4i0QU4LVf8dkt5beMWHxTY-d8vK6A&oe=6A0FC176"
            alt="Adult and children learning"
          />
        </div>

        <div className="about-section3-content">
          <h2>OUR STORY</h2>
          <h3>From Humble Beginnings</h3>
          <p>
            Brightfield Academy was founded in 2005 by a group of passionate
            educators who believed every child deserved a world-class education.
            Starting with just 120 students and a handful of dedicated teachers,
            we've grown into one of the most respected schools in the region.
          </p>

          <p>
            Today, with over 1,200 students and 80+ qualified staff, we continue
            to uphold the same founding principles: excellence, inclusion, and
            heart. Our graduates have gone on to top universities and careers
            across the globe.
          </p>
        </div>
      </div>

      <div className="about-section4">
        <h2>OUR JOURNEY</h2>
        <h3>Key Milestones</h3>

        <ul className="timeline">
          <li>
            <span className="year">2005</span>
            <p className="myP">Brightfield Academy founded with 120 students</p>
          </li>

          <li>
            <span className="year">2008</span>
            <p className="myP">Opened our science & technology wing</p>
          </li>

          <li>
            <span className="year">2012</span>
            <p className="myP">Awarded Regional School of Excellence</p>
          </li>
        </ul>
      </div>

      <div className="about-section5">
        <h2>Leadership</h2>
        <h3>Meet Our Team</h3>
        <p>Experienced educators and administrators committed to your child's success.</p>

          <div className="teacher-display">
            {teacherInfo.map((item, index) => (
              <div className="containTeacherInfo" key={index} >
                <div className="teacher-image">
                  <img src={item.teacherimg} alt="" />
                </div>
                <h4>{item.teacherName}</h4>
                <h3>{item.teacherRole}</h3>
                <p>{item.teacherAchieve}</p>
              </div>
            ))}
          </div>
      </div>

      <div className="about-section6">
        <h2>Become Part of Our Story</h2>
        <p>We'd love to welcome your family into the Brightfield community. Apply today or reach out with any questions.</p>

        <div className="contain-section6-btn">
          <NavLink to="/admissions">
            <button className="last-2btn" >Apply for Admission →</button>
            </NavLink>
            <NavLink to= "/contact">
            <button className="last-1btn" >Contact Us</button>
            </NavLink>
        </div>
      </div>
    </div>
  );
}
