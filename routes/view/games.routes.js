const router = require('express').Router();
// компоненты
const FormUpdateGamePage = require('../../components/FormUpdateGamePage');
const GamePage = require('../../components/GamePage');
const GamesPage = require('../../components/GamesPage');
// модели
const { Game, Favorite } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({
      include: { model: Favorite },
    });
    res.send(res.renderComponent(GamesPage, { title: 'Games Page', games }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;

    const game = await Game.findOne({ where: { id: gameId } });

    res.send(res.renderComponent(GamePage, { title: 'Game Page', game }));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/form-update/:gameId', async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findOne({ where: { id: gameId } });
    res.send(
      res.renderComponent(FormUpdateGamePage, { title: 'Form update', game }),
    );
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
