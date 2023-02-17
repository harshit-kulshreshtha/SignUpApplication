import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import imzRoutes from './routes';
//import { BrowserRouter } from 'react-router-dom';
import SignUp from "./signUp";
import App from "./App";
import UserDetails from "./userDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contextProvider";

// const showAccordion = () => {
//   if (window.location.pathname === "/signUp") {
//     return <SignUp />
//   }
//   else  {
//     return <App />
//   }

// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <BrowserRouter>
//         <Route path="/signup" component={SignUp}/>
//         <Route path="/" component={App}/>
//        </BrowserRouter>
//   </React.StrictMode>

// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/userDetails",
    element: <UserDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
