import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from '../src/components/Home/Home'
import './App.css';
import Tshirt from './components/Tshirt/Tshirt';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Grandfather from './components/Grandfather/Grandfather';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'grandfather',
          element: <Grandfather></Grandfather>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
