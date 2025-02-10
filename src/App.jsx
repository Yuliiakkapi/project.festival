import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import StagesPage from "./views/StagesPage";
import DetailPage from "./views/DetailPage";

const router = createBrowserRouter([
  {
    path: "/project.festival/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "stagepage/:stageId",
        element: <StagesPage />,
      },
      {
        path: "detailpage/:eventId",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
