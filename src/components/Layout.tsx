import { type FC, type JSX, useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Icons/Menu";
import Sidebar from "./Sidebar";
import { classNames } from "~/utils";

interface LayoutProps {
  children: JSX.Element;
  closeSidebar?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, closeSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar>
        <button
          type="button"
          className="focus:ring-primary-500 -mx-2 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
          onClick={() => {
            setSidebarOpen(true);
          }}
        >
          <Menu aria-hidden="true" className="h-6 w-6 stroke-gray-400" />
        </button>
      </Navbar>

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="lg-hidden"></div>

      <div className={classNames(closeSidebar ? "lg:pl-20" : "lg:pl-56")}>
        <main className="py-24">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-x-4">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
