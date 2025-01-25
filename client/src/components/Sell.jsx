import styles from "../public/styles/sell.module.css";

function Sell() {
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
        <form className={styles.inputForm}>
          <input
            className={styles.input}
            placeholder="Name Of The Book"
            type="text"
            id="book_name"
            name="book_name"
            required
          />

          <input
            className={styles.input}
            placeholder="Author Of The Book"
            type="text"
            id="author"
            name="author"
            required
          />

          <input
            className={styles.input}
            placeholder="Price Of The Book"
            type="number"
            id="price"
            name="price"
            min="0"
            required
          />

          <input
            className={styles.input}
            placeholder="Seller Name"
            type="text"
            id="sellerName"
            name="sellerName"
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
