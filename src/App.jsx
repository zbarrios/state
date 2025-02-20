import "./App.css";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StandardLayout from "./layouts/StandardLayout";
import SecondLayout from "./layouts/SecondLayout";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "agents", 
        element: <Agents /> 
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayout />,
    children: [
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
