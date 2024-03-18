import './App.css'
import Home from './components/Home'
import Itens from './components/Itens';
import Meusprojetos from './components/Meusprojetos'
import Sobremim from './components/Sobremim'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sobremim",
      element: <Sobremim/>
    },
    {
      path: "/meusprojetos",
      element: <Meusprojetos/>
    }, 
    {
      path: "/habilidades",
      element: <Itens/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
