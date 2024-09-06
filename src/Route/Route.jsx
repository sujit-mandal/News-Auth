import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const newsData = await fetch("/news.json");
          const newsDataJson = await newsData.json();
          const categories = await fetch("/categories.json");
          const categoriesJson = await categories.json();
          return {
            news: newsDataJson,
            categories: categoriesJson,
          };
        }
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: async () => {
          const newsData = await fetch("/news.json");
          const newsDataJson = await newsData.json();
          const categories = await fetch("/categories.json");
          const categoriesJson = await categories.json();
          return {
            news: newsDataJson,
            categories: categoriesJson,
          };
        },
      },
    ],
  },
]);

export default myCreatedRoute;
