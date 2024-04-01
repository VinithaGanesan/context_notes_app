import Archieve from "./pages/Archive";
import Bin from "./pages/Bin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Tasks from "./pages/Tasks";

export const AuthenticationRoutes = [
    {
        id: 1,
        name: "Login",
        component: Login,
        path: "/",
    },
    {
        id: 2,
        name: "Signup",
        component: SignUp,
        path: "/signup",
    },
];

export const AuthenticatedRoutes = {
    id: 1,
    name: "Application",
    path: "/app",
    children: [
      {
        id: 11,
        name: "Home",
        className: "bx bx-home",
        component: Home,
        path: "/app/home",
      },
      {
        id: 12,
        name: "Search",
        className: "bx bx-search",
        component: Search,
        path: "/app/search",
      },
      {
        id: 13,
        name: "Notes",
        className: "bx bx-file",
        component: Notes,
        path: "/app/notes",
      },
      {
        id: 14,
        name: "Tasks",
        className: "bx bx-list-check",
        component: Tasks,
        path: "/app/tasks",
      },
      {
        id: 15,
        name: "Archive",
        className: "bx bx-archive-in",
        component: Archieve,
        path: "/app/archive",
      },
      {
        id: 16,
        name: "Bin",
        className: "bx bx-trash",
        component: Bin,
        path: "/app/bin",
      },
    ],
  };