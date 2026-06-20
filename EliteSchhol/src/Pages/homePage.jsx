// import { motion } from "framer-motion";
import '../style/home.css'
import { FaBookOpen, FaStar, FaUsers, FaLaptop, FaPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page-info">
      <div className="section1">
        <h2>WELCOME TO ELITE FOUNDATION</h2>
        <div className="every-child-shine">
          <h3>Where Every Child</h3>
          <h3 className="shines">Shines Bright</h3>
        </div>

        <p>
          A nurturing learning environment that empowers students to reach their
          full potential — academically, socially, and creatively.
        </p>

        <div className="section1-btn">
            <NavLink to="/admissions" className="first-btn" >Apply for Admission</NavLink>
            <NavLink to="/gallery" className="second-btn">View Gallery</NavLink>
        </div>
      </div>

      <div className="section2">
        <div className="student-teacher">
          <div className="students">
            <h2>1,200+</h2>
            <p>Students Enrolled</p>
          </div>
          <div className="students">
            <h2>80+</h2>
            <p>Qualified Teachers</p>
          </div>
        </div>
        <div className="years-awar">
          <div className="students">
            <h2>20+</h2>
            <p>Years of Excellence</p>
          </div>
          <div className="students">
            <h2>35+</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="all-text">
          <h2>ABOUT US</h2>
          <h3>Building Futures, One Student at a Time</h3>
          <p>
            Founded in 2005, Elite Foundation has been a beacon of quality
            education in Springfield. Our passionate educators combine
            time-tested teaching methods with innovative technology to create an
            inspiring learning experience.
          </p>
          <p>
            We believe every child has unique potential. Our small class sizes
            ensure personalized attention, while our wide range of
            extracurricular activities help students discover and develop their
            talents.
          </p>

          <button>
            <NavLink to="/admissions" className="enrolla">
              Enroll Your Child →
            </NavLink>
          </button>
        </div>

        <div className="section3-img">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1761208662734-fb46f1398551"
            alt="Image of the childhren in class"
          />
        </div>
      </div>

      <div className="section4">
        <div className="section1-topic">
          <h2>OUR VALUES</h2>
          <h3>Why Choose Elite Foundation</h3>
        </div>

        <div className="all-the-values">
          <div className="value">
            <h2>
              <FaBookOpen />
            </h2>
            <h3>Academic Excellence</h3>
            <p>
              We foster a love for learning with a rigorous, engaging curriculum
              designed to prepare students for a bright future.
            </p>
          </div>

          <div className="value">
            <h2>
              <FaStar />
            </h2>
            <h3>Holistic Development</h3>
            <p>
              From arts to sports, we nurture every child's unique talents and
              help them grow into well-rounded individuals.
            </p>
          </div>

          <div className="value">
            <h2>
              <FaUsers />
            </h2>
            <h3>Inclusive Community</h3>
            <p>
              We celebrate diversity and create a safe, welcoming environment
              where every child feels valued and heard.
            </p>
          </div>

          <div className="value">
            <h2>
              <FaLaptop />
            </h2>
            <h3>Innovation & Technology</h3>
            <p>
              Our modern classrooms integrate technology to inspire creativity
              and equip students with 21st-century skills.
            </p>
          </div>
        </div>
      </div>

      <div className="section5">
        <h2 className="testim">TESTIMONIALS</h2>
        <h3 className="parent-comment">What Parent Say</h3>

        <div className="section5-topic">
          <div className="topics">
            <h2>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h2>
            <p className="topics-info">
              "Elite Foundation has been a game-changer for my daughter. She
              loves going to school every day!”
            </p>

            <div className="teacher-info">
              <h2>SJ</h2>
              <div className="teacher-about">
                <h3>Sarah Johnson</h3>
                <h4>Parent of Grade 4 student</h4>
              </div>
            </div>
          </div>

          <div className="topics">
            <h2>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h2>
            <p className="topics-info">
              “The teachers are incredibly dedicated. My son has grown so much
              both academically and socially.”
            </p>

            <div className="teacher-info">
              <h2>MO</h2>
              <div className="teacher-about">
                <h3>Michael Osei</h3>
                <h4>Parent of Grade 7 student</h4>
              </div>
            </div>
          </div>

          <div className="topics">
            <h2>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h2>
            <p className="topics-info">
              “The admissions process was smooth and the staff were very
              welcoming. Highly recommend!”
            </p>

            <div className="teacher-info">
              <h2>PS</h2>
              <div className="teacher-about">
                <h3>Priya Sharma</h3>
                <h4>Parent of Grade 2 student</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6">
        <h2>
          <FaPlane />
        </h2>
        <h3>Ready to Join Our Family?</h3>
        <p>
          Enrollment is now open for the upcoming academic year. Secure your
          child's place at Brighfield Academy today.
        </p>
        <button className="start-application-btn">Start Application</button>
      </div>

    </div>
  );
}
