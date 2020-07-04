/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Home from "views/Home/Home.js";
import Blog from "views/Blog/Blog.js";
import Services from "views/Services/Services.js";
import Team from "views/Team/Team.js";
import Funding from "views/Funding/Funding.js";
import Careers from "views/Careers/Careers.js";
import Publications from "views/Publication/Publication.js";
import Contact from "views/Contact/Contact.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import Faq from "views/Faq/Faq.js";
import News from "views/News/News.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/blog",
    name: "Blog",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Blog,
    layout: "/stacklayout"
  },
  {
    path: "/faq",
    name: "Faq",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Faq,
    layout: "/stacklayout"
  },
  {
    path: "/news",
    name: "News",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: News,
    layout: "/stacklayout"
  },
  {
    path: "/services",
    name: "Services",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Services,
    layout: "/stacklayout"
  },
  {
    path: "/team",
    name: "Team",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Team,
    layout: "/stacklayout"
  },
  {
    path: "/funding",
    name: "Funding",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Funding,
    layout: "/stacklayout"
  },
  {
    path: "/careers",
    name: "Careers",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Careers,
    layout: "/stacklayout"
  },
  {
    path: "/publications",
    name: "Publications",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Publications,
    layout: "/stacklayout"
  },
  {
    path: "/contact",
    name: "Contact",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Contact,
    layout: "/stacklayout"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/haylayout"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/stacklayout"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/stacklayout"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
