function Spinner() {
  return (
    <center>
      <div
        style={{ width: "3rem", height: "3rem" }}
        className="d-flex justify-content-center"
      >
        <div className="spinner-border" role="status"></div>
      </div>
    </center>
  );
}

export default Spinner;
