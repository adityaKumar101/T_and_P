import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProviderComp";
import { ProtectedRoute } from "./ProtectedRoutes";
import HomePage from "../Homepage";
import Login from "../admin/Login";
import CreateJobs from "../admin/CreateJobs";
import JobList from "../Pages/JobList";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
        path: "/",
        element: <HomePage/>,
        
      },
      {
        path: "/home",
        element: <HomePage/>,
      },
      {
        path: "/admin/login",
        element: <Login/>,
      },
      {
        path: "/joblist",
        element: <JobList/>,
      },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        
        {
            path: "/admin/create-jobs",
            element: <CreateJobs/>,
            
          },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    // {
    //   path: "/",
    //   element: <div>Home Page</div>,
    // },
    // {
    //   path: "/login",
    //   element: <div>Login</div>,
    // },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;