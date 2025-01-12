import "../public/styles/style.css";
import cost from "../public/images/feature-images/cost-effective.jpg";
import sell from "../public/images/feature-images/sell.jpg";
import variety from "../public/images/feature-images/variety.jpg";
import recycle from "../public/images/feature-images/recycle.jpg";
import buy from "../public/images/listings/buy.jpg";
import sellListing from "../public/images/listings/sell.jpg";

function Home() {
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
      <div className="feature">
        <div className="feature-heading">
          <i>Why Choose Booker?</i>
        </div>
        <div className="feature-content">
          <div className="card" style={{ width: "18rem" }}>
            <img src={cost} className="card-img-top" alt="Cost Effective" />
            <div className="card-body">
              <p className="card-text">
                Find refurbished books at a fraction of the original price. Save
                money while enjoying your favorite reads!
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={sell} className="card-img-top" alt="Sell Books" />
            <div className="card-body">
              <p className="card-text">
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
            <div className="card-body">
              <p className="card-text">
                Explore a vast collection of books, from academic resources to
                popular novels, all in one place.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={recycle} className="card-img-top" alt="Recycle" />
            <div className="card-body">
              <p className="card-text">
                Reduce waste and help the environment by giving books a second
                life through reselling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        <i>List/Buy Books</i>
      </div>
      <div className="container my-4">
        <div className="row justify-content-center gap-5">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow">
              <img src={buy} className="card-img-top" alt="Books for sale" />
              <div className="card-body">
                <p className="card-text">
                  Find the books you need without breaking the bank! Explore a
                  wide range of high-quality refurbished books, from academic
                  textbooks to timeless classics and bestsellers.
                </p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-dark">
                    BUY
                  </button>
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
              <div className="card-body">
                <p className="card-text">
                  Got books you no longer need? Turn them into cash
                  effortlessly! Create a listing in minutes and connect with
                  buyers looking for exactly what you have.
                </p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-dark">
                    SELL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
