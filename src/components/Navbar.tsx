import Link from "next/link";
import React, {
  type ChangeEvent,
  type KeyboardEvent,
  type FC,
  type JSX,
  useState,
} from "react";
import { Logo } from "./Icons/Logo";
import Search from "./Icons/Search";
import Router from "next/router";

interface NavbarProps {
  children?: JSX.Element;
}

interface NavigationItem {
  icon: (className: string) => JSX.Element;
  name: string;
  path: string;
  lineAbove: boolean;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
    try {
      await Router.push({
        pathname: "/SearchPage",
        query: { q: searchInput },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      void handleSearch();
    }
  };
  return (
    <>
      <div className=" fixed z-50 w-full border border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-full px-6 lg:px-16 xl:grid xl:grid-cols-12">
          <div className="flex flex-shrink-0 items-center lg:static xl:col-span-2">
            <Link href="/#" aria-label="Home">
              <Logo className="h-10" />
              DTUBE
            </Link>
          </div>
          <div className="w-full min-w-0 flex-1 lg:px-0 xl:col-span-8">
            <div className=" g:mx-0 flex items-center px-6 py-4 lg:max-w-none xl:mx-0 xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative  ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 stroke-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="focus:ring-primary-500 block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 "
                    placeholder="Search"
                    type="search"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSearchInput(e.target.value)
                    }
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
