import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  { 
    path: "/dashboard",
    element: <Home />,
  },
  { 
    path: "/login",
    element: <Login />,
  },
  { 
    path: "/signup",
    element: <Signup />,
  }

]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
