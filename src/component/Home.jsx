import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ✅ animate only once
  }, []);

  return (
    <div style={{ backgroundColor: "#2b0037", color: "white" }}>
      {/* Hero Section */}
      <section className="hero-img">
        <div className="container">
          <h1 className="display-6 fw-bold">Welcome to Exam Application System</h1>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">Our Services</h2>
          <div className="row g-4">
            <ServiceCard
              icon="bi-pencil-square"
              color="text-primary"
              title="Create & Manage Exams"
              text="Easily create online exams, manage questions, and schedule tests with full control."
              aos="fade-right"
              delay="100"
            />
            <ServiceCard
              icon="bi-people-fill"
              color="text-success"
              title="User Roles"
              text="Separate logins and features for Students and Admins to ensure secure and organized access."
              aos="fade-up"
              delay="200"
            />
            <ServiceCard
              icon="bi-bar-chart-line-fill"
              color="text-danger"
              title="Results & Reports"
              text="Instant results and performance analytics with downloadable reports for admins."
              aos="fade-left"
              delay="300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5 px-3" id="about" data-aos="fade-up" data-aos-delay="150">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center">
            <h2>About Us</h2>
            <p className="lead">
               The <strong>Exam Application System</strong> is designed to simplify
            and manage examinations efficiently for administrators, teachers,
            and students. Our platform makes exam registration, scheduling, and
            management more transparent, secure, and user-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="container my-5 px-3" id="exams">
        <h3 className="text-center mb-4" data-aos="fade-down">Available Exam Categories</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {[
            { title: 'Java Full Stack', text: 'OOPs, collections, core syntax, exceptions and more.', image: '/images/java.jpg' },
            { title: 'Python Full Stack', text: 'Core syntax, logic building, data types, functions.', image: '/images/python.png' },
            { title: 'Mern Full Stack', text: 'MongoDB, Express, React, Node.js development skills.', image: '/images/mern.png' },
            { title: '.Net Full Stack', text: 'ASP.NET MVC, C#, SQL Server, Angular, Web API.', image: '/images/dotnet.jpg' }
          ].map((exam, idx) => (
            <div
              className="col"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={String(100 * (idx + 1))}
            >
              <div className="card h-100 shadow-sm border-0">
                <img src={exam.image} className="card-img-top img-fluid" alt={`${exam.title} category`} />
                <div className="card-body text-dark">
                  <h5 className="card-title">{exam.title}</h5>
                  <p className="card-text">{exam.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="mt-5 pt-5 pb-3"
        id="contact"
        data-aos="fade-up"   // ✅ footer animation
        data-aos-delay="200"
        style={{
          background: "linear-gradient(to right, #6a11cb, #ff0066)",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row gy-4 text-center text-md-start">
            {/* Logo & About */}
            <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
              <div
                className="bg-white rounded p-2 mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <img
                  src="/images/cap.jpg"
                  alt="Logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <h5 className="fw-bold mb-1">
                <span className="text-white">Exam</span>
                <span className="text-black">App</span>
              </h5>
              <p className="mb-0 text-white small text-center text-md-start">
                Empowering students through seamless <br />
                exam management and automation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-3">
              <h5 className="fw-bold">QUICK LINKS</h5>
              <a href="/" className="d-block text-white small">Home</a>
              <a href="/About" className="d-block text-white small">About Us</a>
              <a href="#exams" className="d-block text-white small">View Exams</a>
              <a href="/Contact" className="d-block text-white small">Contact</a>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-3">
              <h5 className="fw-bold">CONTACT US</h5>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <i className="bi bi-geo-alt-fill me-2 fs-5"></i>
                <span className="small">456 Edu Lane, Pune</span>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <i className="bi bi-envelope-fill me-2 fs-5"></i>
                <a
                  href="mailto:support@examhub.com"
                  className="small text-white text-decoration-none"
                >
                  support@examhub.com
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-telephone-fill me-2 fs-5"></i>
                <a
                  href="tel:+919876543210"
                  className="small text-white text-decoration-none"
                >
                  +91 9876543210
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-12 col-md-3">
              <h5 className="fw-bold">FOLLOW US</h5>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a href="#" className="me-3 text-white"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="me-3 text-white"><i className="bi bi-twitter fs-5"></i></a>
                <a href="#" className="me-3 text-white"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="text-white"><i className="bi bi-linkedin fs-5"></i></a>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
          <p className="text-center mt-3 mb-0 small">
            &copy; 2025 ExamHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// ✅ Service Card Component
const ServiceCard = ({ icon, color, title, text, aos, delay }) => (
  <div
    className="col-12 col-sm-6 col-md-4"
    data-aos={String(aos)}
    data-aos-delay={String(delay)}
  >
    <div className="card h-100 shadow-sm border-0 text-center p-3 bg-white text-dark">
      <div className="card-body">
        <i className={`bi ${icon} fs-1 ${color}`}></i>
        <h5 className="card-title mt-3">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </div>
);

export default Home;
