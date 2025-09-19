"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlineBarChart,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
  BsHouse,
} from "react-icons/bs";
import { GiAbstract027 } from "react-icons/gi";
import { BsQuestionSquare } from "react-icons/bs";
import { HeroUIProvider, ToastProvider, Tooltip } from "@heroui/react";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";

interface MyProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: MyProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const MenuItems = [
    {
      title: "Home",
      href: "/",
      icon: <BsHouse />,
    },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        {
          title: "Project #1",
          href: "/project1",
        },
        {
          title: "Project #2",
          href: "/project2",
        },
        {
          title: "Project #3",
          href: "/project3",
        },
      ],
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <AiOutlineBarChart />,
    },
    {
      title: "Profile",
      href: "/profile",
      spacing: true,
      icon: <BsPerson />,
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: <BsQuestionSquare />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <AiOutlineSetting />,
    },
    {
      title: "Logout",
      href: "/logout",
      icon: <AiOutlineLogout />,
    },
  ];

  /* This method handles the main menu toggling */
  const toggleMenu = () => {
    setMenuOpen((menuIsVisible) => {
      // Close the submenu if the menu is closed
      if (!menuIsVisible) setSubmenuOpen(false);

      return !menuIsVisible;
    });
  };

  /* This method handles the submenu toggling */
  const toggleSubmenu = () => {
    setSubmenuOpen((submenuIsVisible) => !submenuIsVisible);
  };

  /* This method handles page navigation */
  const navigateTo = (link: string) => {
    router.push(link);
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <HeroUIProvider>
          <ThemeProvider>
            <div className="flex">
              <div className={`menuPanel ${menuOpen ? "w-65" : "w-20"}`}>
                <BsArrowLeftShort
                  className={`menuToggler ${!menuOpen && "rotate-180"}`}
                  onClick={toggleMenu}
                />
                <div className="menuHeading">
                  <GiAbstract027 className="menuLogo" />
                  <h1
                    className={`menuHeadingText ${
                      !menuOpen && "scale-0 hidden"
                    }`}
                  >
                    Main Menu
                  </h1>
                </div>

                <ul className="pt-2">
                  {MenuItems.map((menuItem, index) => (
                    <div
                      id={`test${index}`}
                      key={index}
                      onClick={() => {
                        if (menuItem.submenu) {
                          toggleSubmenu();
                        } else if (menuItem.href) {
                          navigateTo(menuItem.href);
                        } else {
                          console.log("menu item href not specified");
                        }
                      }}
                    >
                      <li
                        className={`menuItem ${
                          menuItem.spacing ? "mt-9" : "mt-2"
                        }`}
                      >
                        <Tooltip
                          classNames={{
                            base: ["text-black"],
                          }}
                          closeDelay={100}
                          content={menuItem.title}
                          delay={1000}
                          isDisabled={menuOpen && true}
                          offset={20}
                          placement="right"
                          radius="sm"
                          shadow="lg"
                          showArrow={true}
                        >
                          <span className="menuItemIcon">{menuItem.icon}</span>
                        </Tooltip>

                        <span
                          className={`menuItemTitle ${!menuOpen && "hidden"}`}
                        >
                          {menuItem.title}
                        </span>

                        {menuItem.submenu && (
                          <BsChevronDown
                            className={`${submenuOpen && "rotate-180"}`}
                          />
                        )}
                      </li>

                      {menuItem.submenu && menuOpen && (
                        <ul
                          className={`submenuItems ${
                            submenuOpen ? "visible" : ""
                          }`}
                        >
                          {/* Iterate through the submenu items */}
                          {menuItem.submenuItems.map((submenuItem, index) => (
                            <li
                              key={index}
                              className="submenuItem"
                              onClick={(e) => {
                                if (submenuItem.href) {
                                  // Prevents the parent (i.e., "menuItem") "onClick" event from firing
                                  e.stopPropagation();

                                  navigateTo(submenuItem.href);
                                } else {
                                  console.log("menu item href not specified");
                                }
                              }}
                            >
                              {submenuItem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Header />
                <ToastProvider />
                <div className="p-7">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
