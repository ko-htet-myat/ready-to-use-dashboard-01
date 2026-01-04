import DashboardLayout from "@/layouts/dashboard-layout";
import { createBrowserRouter, redirect } from "react-router";
import DashboardPage, { loader } from "./dashboard";
import RootLayout from "@/layouts/root-layout";
import { NotFoundPage } from "./404";
import {
  CreateEmployeePage,
  EmployeeLeavePage,
  employeeLoader,
  EmployeePage,
  leaveLoader,
} from "./employee";
import { ROUTE_NAMES } from "@/constants/route.names";
import { LoginPage } from "./auth";

export const routes = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => redirect(ROUTE_NAMES.DASHBOARD),
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
            path: ROUTE_NAMES.EMPLOYEE,
            children: [
              {
                index: true,
                loader: async () => await employeeLoader(),
                Component: EmployeePage,
              },
              {
                path: ROUTE_NAMES.CREATE,
                Component: CreateEmployeePage,
              },
              {
                path: ROUTE_NAMES.LEAVE,
                loader: async () => await leaveLoader(),
                Component: EmployeeLeavePage,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
