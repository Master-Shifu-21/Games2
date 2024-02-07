const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/games">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/players">
                Players
              </a>
            </li>

            {/* Условный рендеринг с использование тернарного оператора: 
          1) Если user есть, то мы с ним здороваемся и показываем logout, favorites
          2) Если user нет, то мы показываем sign-up и sign-in */}
            {user ? (
              <>
                <li>Hello, {user.email}!</li>
                <li className="nav-item">
                  <a className="nav-link" href="/api/auth/logout">
                    LogOut
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/favorites">
                    Favorites
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/sign-up">
                    Sign-up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/sign-in">
                    Sign-In
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
