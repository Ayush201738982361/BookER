function MyAccount() {
  return (
    <>
      <div className="card text-center my-5">
        <div className="card-header">Account Details</div>
        <div className="card-body">
          <h5 className="card-title">Name:</h5>
          <p className="card-text">Email</p>
          <a href="#" className="btn btn-primary">
            Update Email
          </a>
        </div>
        <div className="card-footer text-body-secondary">
          Account Created At
        </div>
      </div>
    </>
  );
}

export default MyAccount;
