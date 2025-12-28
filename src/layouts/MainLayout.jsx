import { NavLink, Outlet } from 'react-router-dom';

export default function MainLayout({ basePath }) {
  return (
    <>
      <header>
        <h1>SUB MONO1</h1>
        <nav style={styles.nav}>
          <NavLink to={`${basePath}`} style={styles.link}>
            MAIN
          </NavLink>
          <NavLink to={`${basePath}sub`} style={styles.link}>
            SUB
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>copyright</footer>
    </>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: 16,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 500,
  },
};