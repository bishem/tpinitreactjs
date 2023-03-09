/**
 * Amin MOHAMED
 * Version 1.0
 */
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './styles/App.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
