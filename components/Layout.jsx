const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* можно подключить стили бутстрапа двумя способами:
            а) в лэйауте
            б) через статику
        */}
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link> */}
        <link href='/styles/style.css' rel='stylesheet' />
        {/* <link rel="stylesheet" href="style.css" /> */}
        <script defer src="/scripts/script.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/deleteAndFavorite.js" />
        <script defer src="/scripts/update.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/version.js" />
    
      </head>
      <body>
        <NavBar user={user}/>
        {children}
      </body>
    </html>
  );
};
