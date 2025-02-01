import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "../public/styles/buy.module.css";

function Buy(props) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (props.mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [props.mode]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/buy")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching book data", error);
      });
  }, []);

  return (
    <>
      <div className={styles.hero_image}>
        <div className={styles.hero_text}>
          <h1>Find Your Next Great Read</h1>
          <p>
            Discover a wide selection of books at unbeatable prices. From
            timeless classics to the latest bestsellers, explore listings from
            passionate readers and sellers just like you. Start your journey to
            your next favorite book today!
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          className="card"
          style={{ width: "50rem", margin: "1px solid black" }}
        >
          <ul className="list-group list-group-flush">
            {listings.map((listing) => (
              <li
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                className={
                  props.mode === "light"
                    ? "list-group-item py-3 "
                    : "list-group-item py-3 bg-dark"
                }
                key={listing._id}
              >
                <div>Book: {listing.book_name}</div>
                <div>Author: {listing.author}</div>
                <div>Price: ${listing.price}</div>
                <div>Seller: {listing.seller_name}</div>
                <div>Contact: {listing.seller_contact}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

Buy.propTypes = {
  mode: PropTypes.string.isRequired,
};
export default Buy;
