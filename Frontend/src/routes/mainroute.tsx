import { lazy } from "react";
import { useRoutes, type RouteObject} from "react-router-dom";
import Loadable from "../component/third-patry/Loadable";

const Main = Loadable(lazy(() => import("../pages/Main")));

const UserRoutes = (): RouteObject[] => [
  
  {path: "/", element: <Main />, },                                          
  {path: "main", element: <Main /> },
  // {path: "reg", element: <Reg/> },
  { path: "*", element: <Main /> },

];

// SubPart ย่อย
// const MainRoutes = (): RouteObject[] => [
//   {
//     path: "/", element: <Login />, 
//   },                                          
//   {
//     path: "/login",
//     children: [
//       { index: true, element: <Login /> },
//     //   {path: "main", element: <Login /> },
//       { path: "*", element: <Login /> },
//     ],
//   },
//   { path: "*", element: <Login /> }, 
// ];

function ConfigRoutes() {
  // Bypass Login ค่อยเพิ่มในอนาคต
  // const isLoggedIn = localStorage.getItem('isLogin') === 'true';

  let routes: RouteObject[] = [];
  routes = UserRoutes();
  return useRoutes(routes);

}

export default ConfigRoutes;