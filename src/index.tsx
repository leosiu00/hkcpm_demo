import * as React from "react";
import * as ReactDOM from "react-dom/client";
import UserHome from "./user/userHome";
import AdminHome from "./admin/adminHome";

import {
  createHashRouter,
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
import {data} from "./importData/importData";
import UserContinuationPayment from "./user/userContinuationPayment";
import UserCoursePayment from "./user/userCoursePayment";
import UserPaymentSuccess from "./user/userPaymentSuccess";
import CoursePaymentSuccess from "./user/coursePaymentSuccess";
import LogoutSuccess from "./logoutSuccess";


import AdminLayout from "./admin/adminLayout";
import AdminPayment from "./admin/adminPayment";
import AdminCourse from "./admin/adminCourse";
import AdminCourseAttendence from "./admin/adminCourseAttendence";
import AdminCourseEdit from "./admin/adminCourseEdit";
import AdminPaymentDetail from "./admin/adminPaymentDetail";
import AdminMember from "./admin/adminMember";
import AdminMemberInfo from "./admin/adminMemberInfo";

const router = createHashRouter([
  {
    path: "/*",
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
        path: "course/payment",
        element: <UserCoursePayment />,
      },
      {
        path: "payment/success",
        element: <UserPaymentSuccess />,
      },      
	  {
        path: "payment/courseSuccess",
        element: <CoursePaymentSuccess />,
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
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },     
	   {
        path: "payment",
        element: <AdminPayment />,
      },	   
	  {
        path: "course",
        element: <AdminCourse />,
      },
	  {
        path: "courseAttendence",
        element: <AdminCourseAttendence />,
      }, {
        path: "courseEdit",
        element: <AdminCourseEdit />,
      }, {
        path: "paymentDetail",
        element: <AdminPaymentDetail />,
      }, {
        path: "member",
        element: <AdminMember />,
      }, {
        path: "memberDetail",
        element: <AdminMemberInfo />,
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