
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import DashboardPage from "./Pages/Dashboard";

const App: React.FC = () => {
  const appRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <SignUpPage />,
    // },
    {
      // path: "/signup",
      path: "/",
      element: <SignInPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);
  return (
    <>
      {/* hello */}
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
