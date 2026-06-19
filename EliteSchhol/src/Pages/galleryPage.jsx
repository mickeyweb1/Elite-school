import "../style/gallery.css";
export default function Gallery() {
  const allInfo = [
    {
      event: "Excursion",
      image:
        "/images/execution1.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution2.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution3.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution4.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution5.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student1.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student2.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student3.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student4.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student5.jpg",
    },
    {
      event: "Teacher",
      image:
        "/images/teacher1.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student6.jpg",
    },
    {
      event: "Students",
      image:
        "/images/students1.jpg",
    },
    {
      event: "Student",
      image:
        "/images/student8.jpg",
    },
    {
      event: "Graduated Student",
      image:
        "/images/gratua1.jpg",
    },
    {
      event: "Students",
      image:
        "/images/students2.jpg",
    },
    {
      event: "Teacher",
      image:
        "/images/teacher.jpg",
    },
    {
      event: "Cultural Day",
      image:
        "/images/cultural.jpg",
    },
    {
      event: "Cultural Day",
      image:
        "/images/cultural2.jpg",
    },
    {
      event: "Graduated Student",
      image:
        "/images/gratua2.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution6.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution7.jpg",
    },
    {
      event: "Graduated Student",
      image:
        "/images/gratua3.jpg",
    },
    {
      event: "Graduated Student",
      image:
        "/images/gratua4.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution8.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution9.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/execution10.jpg",
    },
    {
      event: "Excursion",
      image:
        "/images/student8.jpg",
    },
    {
      event: "Teacher",
      image:
        "/images/teacher2.jpg",
    },
    {
      event: "Teacher",
      image:
        "/images/teacher3.jpg",
    },
  ];

  return (
    <div className="gallery-page">
      <h1>OUR GALLERY</h1>
      <h2 className="moments">Moments at Elite</h2>
      <p className="gallery-info">
        Browse photos and videos from events, activities, and everyday school
        life.
      </p>

      <div className="all-gallery">
        {allInfo.map((item, index) => {
          return (
            <div
              key={index}
              className={`gallery-card ${
                (index + 1) % 3 === 0 ? "special-img" : ""
              }`}
            >
              <img src={item.image} alt={item.event} />

              <div className="overlay">
                <h2 className="events">{item.event}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
