const React = require('react')
const Layout = require('./Layout')

function PlayerPage({title, player, user}) {
  return (
    <Layout title={title} user={user}>
      <div className="card" style={{ width: '18rem' }}>
          <img src={player.avatar} className="card-img-top" alt="player" />
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p>{player.email}</p>
            <a href='#' className="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
    </Layout>
  )
}

module.exports = PlayerPage; 