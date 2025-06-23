import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "../public/styles/style.css";
import cost from "../public/images/feature-images/cost-effective.jpg";
import sell from "../public/images/feature-images/sell.jpg";
import variety from "../public/images/feature-images/variety.jpg";
import recycle from "../public/images/feature-images/recycle.jpg";
import buy from "../public/images/listings/buy.jpg";
import sellListing from "../public/images/listings/sell.jpg";

function Home(props) {
  useEffect(() => {
    if (props.mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [props.mode]);
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Buy, Sell, and Save on Books</h1>
          <p>
            Find affordable refurbished books or resell your old ones—saving you
            money while making the world a little greener!
          </p>
        </div>
      </div>
      <br />
      <br />
      <div
        className="feature"
        style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white" }}
      >
        <div
          className="feature-heading"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <i>Why Choose Booker?</i>
        </div>
        <div className="feature-content">
          <div className="card" style={{ width: "18rem" }}>
            <img src={cost} className="card-img-top" alt="Cost Effective" />
            <div
              className={
                props.mode === "dark" ? "card-body bg-dark" : "card-body"
              }
            >
              <p
                className="card-text"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Find refurbished books at a fraction of the original price. Save
                money while enjoying your favorite reads!
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={sell} className="card-img-top" alt="Sell Books" />
            <div
              className={
                props.mode === "dark" ? "card-body bg-dark" : "card-body"
              }
            >
              <p
                className="card-text"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Quickly list your books for resale and connect with buyers in
                just a few clicks.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={variety}
              className="card-img-top"
              alt="Wide Range of Products"
            />
            <div
              className={
                props.mode === "dark" ? "card-body bg-dark" : "card-body"
              }
            >
              <p
                className="card-text"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Explore a vast collection of books, from academic resources to
                popular novels, all in one place.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={recycle} className="card-img-top" alt="Recycle" />
            <div
              className={
                props.mode === "dark" ? "card-body bg-dark" : "card-body"
              }
            >
              <p
                className="card-text"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Reduce waste and help the environment by giving books a second
                life through reselling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="heading"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <i>List/Buy Books</i>
      </div>
      <div className="container my-4 ">
        <div className="row justify-content-center gap-5 ">
          <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card h-100 shadow">
              <img src={buy} className="card-img-top" alt="Books for sale" />
              <div
                className={
                  props.mode === "dark" ? "card-body bg-dark" : "card-body"
                }
              >
                <p
                  className="card-text"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  Find the books you need without breaking the bank! Explore a
                  wide range of high-quality refurbished books, from academic
                  textbooks to timeless classics and bestsellers.
                </p>
                <div className="d-flex justify-content-center">
                  <Link to="/buy">
                    {props.mode === "dark" ? (
                      <button type="button" className="btn btn-light">
                        BUY
                      </button>
                    ) : (
                      <button type="button" className="btn btn-outline-dark">
                        BUY
                      </button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={sellListing}
                className="card-img-top"
                alt="Sell books"
              />
              <div
                className={
                  props.mode === "dark" ? "card-body bg-dark" : "card-body"
                }
              >
                <p
                  className="card-text"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  Got books you no longer need? Turn them into cash
                  effortlessly! Create a listing in minutes and connect with
                  buyers looking for exactly what you have.
                </p>
                <div className="d-flex justify-content-center">
                  <Link to="/sell">
                    {props.mode === "dark" ? (
                      <button type="button" className="btn btn-light">
                        SELL
                      </button>
                    ) : (
                      <button type="button" className="btn btn-outline-dark">
                        SELL
                      </button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  mode: PropTypes.string.isRequired,
};
export default Home;
