import { Navigate } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import BirthdayCards from "./pages/BirthdayCards";
import NotFound from "./pages/NotFound";
import DragAndDrop from "./pages/DragAndDrop";
import Draw from "./pages/Draw";

const routes = [
  {
    path: "app",
    element: <MainLayout />,
    children: [
      { path: "birthdaycard", element: <BirthdayCards /> },
      { path: "dragdrop", element: <DragAndDrop /> },
      { path: "draw", element: <Draw /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Navigate to="/app/birthdaycard" />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

export default routes;
