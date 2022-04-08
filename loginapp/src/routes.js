import { useRoutes } from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from "./pages/Login";


export default function Router() {
  let element = useRoutes([
    {
      children: [
        { path: "/", element: <Login /> },
        { path: "/signup", element: <SignUp /> }
      ]
    },
  ]);

  return element;
}
