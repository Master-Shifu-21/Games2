const React = require('react');
const Layout = require('./Layout');
const PlayerItem = require('./PlayerItem');

function PlayersPage({ title, players = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Players Page</h2>
      <div className="card__container">
        {players.map((player) => (
          <PlayerItem player={player} key={player.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = PlayersPage;
