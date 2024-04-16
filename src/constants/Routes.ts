import HomePage from "../pages/home/HomePage";
import FinancesPage from "../pages/finances/FinancesPage";
import SettingsPage from "../pages/settings/SettingsPage";
import React from "react";
import ReportBugPage from "../pages/report-bug/ReportBugPage";
import LogoutPage from "../pages/logout/LogoutPage";
import LoginPage from "../pages/login/LoginPage";

export const ROUTES: RouteModel[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    component: HomePage,
    private: false,
  },
  {
    id: 2,
    title: "Finances",
    path: "/finances",
    component: FinancesPage,
    private: true,
  },
  {
    id: 3,
    title: "Settings",
    path: "/settings",
    component: SettingsPage,
    private: true,
  },
  {
    id: 4,
    title: "Report a bug",
    path: "/report-bug",
    component: ReportBugPage,
    private: true,
  },
  {
    id: 5,
    title: "Logout",
    path: "/logout",
    component: LogoutPage,
    private: true,
  },
  {
    id: 6,
    title: "Login",
    path: "/login",
    component: LoginPage,
    private: false,
  },
];

type RouteModel = {
  id: number;
  title: string;
  path: string;
  component: () => React.JSX.Element;
  private: boolean;
};
