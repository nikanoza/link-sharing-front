import {
  RootRoute,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Navigate,
} from "@tanstack/react-router";
import { Home, Login, Preview, Profile, Register } from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/login" />,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "login",
  component: Login,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "register",
  component: Register,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "home",
  component: Home,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "profile",
  component: Profile,
});

const previewRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "preview",
  component: Preview,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  homeRoute,
  profileRoute,
  previewRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
