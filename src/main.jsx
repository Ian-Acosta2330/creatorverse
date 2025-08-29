import "./index.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";


//define available routes
const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/AddCreator",element:<AddCreator />},
  {path:"/ViewCreator",element:<ViewCreator />},
  {path:"/EditCreator",element:<EditCreator />},
  {path:"/EditCreator/:creatorName",element:<EditCreator />},
  {path:"/ShowCreators",element:<ShowCreators />},
]);

// Routing component done with react router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>

)