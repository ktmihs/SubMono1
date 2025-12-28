import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <header>
        <h1>SUB MONO1</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>copyright</footer>
    </>
  );
}
