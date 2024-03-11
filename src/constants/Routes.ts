import HomePage from "../pages/home/HomePage";
import FinancesPage from "../pages/finances/FinancesPage";
import SettingsPage from "../pages/settings/SettingsPage";
import React from "react";
import ReportBugPage from "../pages/report-bug/ReportBugPage";
import LogoutPage from "../pages/logout/LogoutPage";

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
];

type RouteModel = {
  id: number;
  title: string;
  path: string;
  component: () => React.JSX.Element;
  private: boolean;
};
