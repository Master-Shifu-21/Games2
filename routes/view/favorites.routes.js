const router = require('express').Router();
const { Favorite, Game } = require('../../db/models');
const FavoritesPage = require('../../components/FavoritesPage');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
      where: { player_id: req.session.user_id },
      include: { model: Game },
    });
    const games = favorites.map((favorite) => favorite.Game);
    res.send(
      res.renderComponent(FavoritesPage, { title: 'Favorites Page', games }),
    );
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
