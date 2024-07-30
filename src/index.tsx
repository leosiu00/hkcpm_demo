import * as React from "react";
import * as ReactDOM from "react-dom/client";
import UserHome from "./user/userHome";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import ErrorPage from "./error-page";
import Login from "./login";
import UserLayout from "./user/userLayout";
import UserInfo from "./user/userInfo";
import UserContinuation from "./user/userContinuation";
import UserPayment from "./user/userPayment";
import UserLearning from "./user/userLearning";
import Payment from "./user/payment";
import UserContinuationPayment from "./user/userContinuationPayment";
import UserPaymentSuccess from "./user/userPaymentSuccess";
import LogoutSuccess from "./logoutSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "info",
        element: <UserInfo />,
      },
      {
        path: "continuation",
        element: <UserContinuation />,
      },
      {
        path: "continuation/payment",
        element: <UserContinuationPayment />,
      },
      {
        path: "payment/success",
        element: <UserPaymentSuccess />,
      },
      {
        path: "payment",
        element: <UserPayment />,
      },
      {
        path: "learning",
        element: <UserLearning />,
      },
    ],
  },
  {
    path: "logoutSuccess",
    element: <LogoutSuccess />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}