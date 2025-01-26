import { useState, useEffect } from "react";
import axios from "axios";

function Buy() {
  const [listings, setListings] = useState([]);

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
            <li className="list-group-item py-3" key={listing._id}>
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
  );
}

export default Buy;
