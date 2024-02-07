const React = require('react');

function PlayerItem({ player }) {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={player.avatar} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <h6 className="card-title">{player.email}</h6>

          <a href={`/players/${player.id}`} className="btn btn-primary">
            More Info
          </a>
        </div>
      </div>
    </>
  );
}

module.exports = PlayerItem;
