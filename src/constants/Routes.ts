import HomePage from "../pages/home/HomePage";
import FinancesPage from "../pages/finances/FinancesPage";
import SettingsPage from "../pages/settings/SettingsPage";
import React from "react";
import ReportBugPage from "../pages/report-bug/ReportBugPage";

export const ROUTES: RouteModel[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    title: "Finances",
    path: "/finances",
    component: FinancesPage,
  },
  {
    id: 3,
    title: "Settings",
    path: "/settings",
    component: SettingsPage,
  },
  {
    id: 4,
    title: "Report a bug",
    path: "/report-bug",
    component: ReportBugPage,
  },
];

type RouteModel = {
  id: number;
  title: string;
  path: string;
  component: () => React.JSX.Element;
};
