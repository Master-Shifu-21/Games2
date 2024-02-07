const React = require('react');
const Layout = require('./Layout');
const GameItem = require('./GameItem');
const FormAddGame = require('./FormAddGame');

function GamesPage({ title, games = [], user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Games Page</h2>
      {user && <FormAddGame />}
      <div className="card__container">
        {games.map((game) => (
          <GameItem game={game} key={game.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = GamesPage;
