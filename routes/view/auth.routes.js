const router = require('express').Router();
const AuthorizationFormPage = require('../../components/AuthorizationFormPage');
const RegistrationFormPage = require('../../components/RegistrationFormPage');

router.get('/sign-up', (req, res) => {
  res.send(
    res.renderComponent(RegistrationFormPage, { title: 'Registration Form' }),
  );
});

router.get('/sign-in', (req, res) => {
  res.send(
    res.renderComponent(AuthorizationFormPage, { title: 'Authorization Form' }),
  );
});

// router.post('/sign-up', (req, res) => {
//   const { email, password } = req.body;
//   res.app.locals.user = { email, password };

//   res.json({ message: 'success' });
// });

module.exports = router;
