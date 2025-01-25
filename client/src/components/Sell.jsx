import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import styles from "../public/styles/sell.module.css";

function Sell() {
  const [book_name, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [seller_name, setSellerName] = useState("");
  const [seller_contact, setSellerContact] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/sell", {
        book_name,
        author,
        price,
        seller_name,
        seller_contact,
      })
      .then((response) => {
        if (response.status === 201) {
          toast.success("Your listing has been added successfully");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("Failed to list your book");
        }
      })
      .catch((error) => {
        toast.error("Internal server error");
        console.log("Error in listing books:", error);
      });
  }
  return (
    <>
      <div className={styles.hero_image}>
        <div className={styles.hero_text}>
          <h1>Sell Your Books</h1>
          <p>
            Got books you no longer need? Turn them into cash effortlessly with
            Booker! Whether its textbooks, novels, or reference materials, our
            platform provides a simple and secure way to connect with buyers.
          </p>
        </div>
      </div>
      <div className={styles.listingHeading}>
        <i>Fill This Form And List Your Books</i>
      </div>
      <div className={styles.container}>
        <ToastContainer position="top-right" autoClose={4000} />
        <form
          className={styles.inputForm}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            className={styles.input}
            placeholder="Name Of The Book"
            type="text"
            id="book_name"
            name="book_name"
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            required
          />

          <input
            className={styles.input}
            placeholder="Author Of The Book"
            type="text"
            id="author"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />

          <input
            className={styles.input}
            placeholder="Price Of The Book"
            type="number"
            id="price"
            name="price"
            min="0"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />

          <input
            className={styles.input}
            placeholder="Seller Name"
            type="text"
            id="sellerName"
            name="sellerName"
            onChange={(e) => {
              setSellerName(e.target.value);
            }}
            required
          />

          <input
            className={styles.input}
            placeholder="Seller Phone No."
            type="tel"
            id="sellerContact"
            name="sellerContact"
            pattern="[0-9]{10}"
            maxLength="10"
            onChange={(e) => {
              setSellerContact(e.target.value);
            }}
            required
          />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Sell;
