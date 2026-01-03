import DashboardLayout from "@/layouts/dashboard-layout";
import { createBrowserRouter, redirect } from "react-router";
import DashboardPage, { loader } from "./dashboard";
import RootLayout from "@/layouts/root-layout";
import LoginPage from "./auth/login";
import UserPage from "./user";
import ProductPage from "./product";
import CategoryPage from "./category";
import { ROUTE_NAMES } from "@/constants/route.names";

export const routes = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => redirect("/dashboard"),
      },
      {
        path: ROUTE_NAMES.LOGIN,
        Component: LoginPage,
      },
      {
        path: ROUTE_NAMES.DASHBOARD,
        Component: DashboardLayout,
        loader: async () => await loader(),
        children: [
          {
            index: true,
            Component: DashboardPage,
          },
          {
            path: ROUTE_NAMES.USER,
            Component: UserPage,
          },
          {
            path: ROUTE_NAMES.PRODUCT,
            children: [
              {
                index: true,
                Component: ProductPage,
              },
              {
                path: ROUTE_NAMES.CATEGORY,
                Component: CategoryPage,
              },
            ],
          },
        ],
      },
    ],
  },
]);
