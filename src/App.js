import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./shared/Header";
import { NavigationBar } from "./shared/NavigationBar";
import { SideBar } from "./shared/SideBar";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

function Root() {
  return (
    <>
      <div className="bg-[#f2f5f9]">
        <Header />
        <NavigationBar />
        <div className="flex gap-10">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
