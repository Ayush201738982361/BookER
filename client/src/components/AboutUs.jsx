import "../public/styles/aboutus.css";

function AboutUs() {
  return (
    <>
      <div className="hero_image">
        <div className="hero_text">
          <h1>Our Mission</h1>
          <p>
            Our mission is to create a platform where people can easily buy,
            sell, or exchange books to promote knowledge sharing and
            sustainability.
          </p>
        </div>
      </div>

      <i className="heading">Our Story</i>
      <div className="our_story">
        <p className="paragraph">
          Booker started as a small passion project during our college days. We
          wanted to solve a problem that we personally faced—finding affordable
          books and a way to give our old books a new home. What began as a
          simple idea has grown into a platform that connects readers, helps
          them save money, and promotes sustainability. This journey has taught
          us the value of creating something that not only serves a purpose but
          also makes a positive impact on the community. Booker is more than
          just a platform; it’s a reflection of our commitment to knowledge,
          innovation, and the environment.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
