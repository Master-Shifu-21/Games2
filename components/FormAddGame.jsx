const React = require('react');

function FormAddGame() {
  return (
    <div className="container">
      <form method='post' id='add-game'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input name="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Img
          </label>
          <input name="img" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label>for adult?</label>
          <input name="adult" type="checkbox" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = FormAddGame;
