const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/', async (req, res) => {
  let result;
  try {
    const { id } = req.body;
    console.log(id, '11111111')
    result = await Favorite.findOne({ where: { id, player_id: req.session.user_id } });
    console.log(result);
    if (result) {
      res.json({ message: 'Вы уже добавляли это в избранное' });
    } else {
      result = await Favorite.create({ game_id: id, player_id: req.session.user_id });
      res.json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const result = await Favorite.destroy({
      where: { game_id: gameId, player_id: req.session.user_id },
    });

    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
