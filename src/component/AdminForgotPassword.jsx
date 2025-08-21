import React from "react";

const AdminForgotPassword = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h4 className="text-center mb-3">Admin Forgot Password</h4>
        <p className="text-muted text-center">Enter your registered email to reset your password</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
