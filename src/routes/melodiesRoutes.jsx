import Home from "@/pages/Home/Home.jsx";
import ProfilePage from "@/pages/Profile/ProfilePage.jsx";
import { createBrowserRouter } from "react-router-dom";

const melodiesRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

export default melodiesRoutes;
