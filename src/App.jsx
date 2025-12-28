import { RouterProvider } from 'react-router-dom';
import { router } from '@sub1/routes/router';
import './App.css';

function App() {
  return (
    <div id='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
