import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/MenuSvg";
import Button from "./shared/Button";

const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  //   {
  //     id: "089",
  //     title: "Features",
  //     url: "#features",
  //   },
  //   {
  //     id: "177",
  //     title: "Pricing",
  //     url: "#pricing",
  //   },
  //   {
  //     id: "3888",
  //     title: "Roadmap",
  //     url: "#roadmap",
  //   }
];

export const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n6 lg:bg-n8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n8" : "bg-n8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-10 h-10 rounded-lg mr-3"></div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
            AI Verse
          </h1>
        </div>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n1 transition-colors hover:text-c1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n1"
                    : "lg:text-n1/50"
                } lg:leading-5 lg:hover:text-n1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="hidden lg:flex ml-4">
          <Button href="#login">Get Started</Button>
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
