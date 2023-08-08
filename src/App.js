import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
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
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
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
        <NavigationBar props={{ isHidden: "hidden" }} />
        <div className="mt-10 lg:mt-5 flex flex-col lg:flex-row gap-5">
          <SideBar />
          <div className="bg-white w-[25rem] lg:w-[840px] mr-5 h-[800px]   rounded-xl">
            <Outlet />
          </div>
        </div>
        {/* <NavigationBar props={{ isHidden: "lg:hidden" }} /> */}
      </div>
    </>
  );
}
