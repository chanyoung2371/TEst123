import { useRoutes } from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import Images from "./pages/Images";


export default function Router() {
  let element = useRoutes([
    {
      children: [
        { path: "/", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "images", element: <Images /> }
      ]
    },
  ]);

  return element;
}
