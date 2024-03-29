const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  res.send(res.renderComponent(MainPage, { title: 'Main page' }));
});

module.exports = router;
