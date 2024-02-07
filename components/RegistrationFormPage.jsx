const React = require('react');
const Layout = require('./Layout');

function RegistrationFormPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <form id="sign-up">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Age
            </label>
            <input
              name="age"
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input name="password" type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Avatar
            </label>
            <input
              name="avatar"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h1 style={{ color: 'red' }} className="error"></h1>
      </div>
    </Layout>
  );
}

module.exports = RegistrationFormPage;
