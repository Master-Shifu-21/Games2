const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const authRouter = require('./view/auth.routes');
const gamesRouter = require('./view/games.routes');
const playersRouter = require('./view/players.routes');
const favoritesRouter = require('./view/favorites.routes');

const authApiRouter = require('./api/auth.api.routes');
const gamesApiRouter = require('./api/games.api.routes');
const favoritesApiRouter = require('./api/favorites.routes');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/games', gamesRouter);
router.use('/players', playersRouter);
router.use('/favorites', favoritesRouter);

router.use('/api/auth', authApiRouter);
router.use('/api/games', gamesApiRouter);
router.use('/api/favorites', favoritesApiRouter);

module.exports = router;
