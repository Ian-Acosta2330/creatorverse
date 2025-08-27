// src/App.jsx
import { useRoutes } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
// import AddCreator from "./pages/AddCreator";
// import EditCreator from "./pages/EditCreator";

export default function App() {
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    // { path: "/add", element: <AddCreator /> },
    // { path: "/edit/:id", element: <EditCreator /> },
  ]);

  return routes;
}

