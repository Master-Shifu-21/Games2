const router = require('express').Router();
const PlayerPage = require('../../components/PlayerPage');
const PlayersPage = require('../../components/PlayersPage');
const { Player } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(
      res.renderComponent(PlayersPage, { title: 'Players Page', players }),
    );
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:playerId', async (req, res) => {
  try {
    const { playerId } = req.params;

    const player = await Player.findOne({ where: { id: playerId } });
    console.log(player);

    res.send(res.renderComponent(PlayerPage, { title: 'Player Page', player }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
