const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Player } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
  let player;
  try {
    const { name, age, email, password, avatar } = req.body;
    if (
      name.trim() &&
      age.trim() &&
      email.trim() &&
      password.trim() &&
      avatar.trim()
    ) {
      player = await Player.findOne({ where: { email } });
      if (!player) {
        const hash = await bcrypt.hash(password, 10);
        player = await Player.create({
          name,
          age,
          email,
          password: hash,
          avatar,
        });
        req.session.user_id = player.id;
      } else {
        res.json({ message: 'Такой емаил уже занят' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все поля!' });
      return;
    }

    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-in', async (req, res) => {
  let player;
  try {
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      player = await Player.findOne({ where: { email } });

      // в метод compare мы передаем сначала "чистый пароль", вторым параметром передаем
      // захешированный пароль пользователя
      // const compare = await bcrypt.compare(password, player.password);

      // затем в усливие if передаем эту переменную compare, если пароли совпадают,
      // то compare будет true
      if (player && await bcrypt.compare(password, player.password)) {
        req.session.user_id = player.id;
        res.json({ message: 'success' });
      } else {
        res.json({ message: 'Неправильный логин или пароль' });
      }
    } else {
      res.json({ message: 'Заполните все поля!' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
