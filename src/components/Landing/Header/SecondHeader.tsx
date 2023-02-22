import { RxHamburgerMenu } from "react-icons/rx";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useContext } from "react";
import { Menu, Disclosure } from "@headlessui/react";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiFillShop } from "react-icons/ai";
import { GiCoins } from "react-icons/gi";
import { AiFillCreditCard } from "react-icons/ai";
import { IconType } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
import { TbLanguageHiragana } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import LanguageContext from "../../../util/context";
import useDarkMode from "../../../util/useDarkMode";

interface LinkInterface {
  href: string;
  label: string;
  icon: IconType;
}

const links: LinkInterface[] = [
  { href: "/", label: "Home", icon: AiFillHome },
  { href: "/about", label: "About", icon: AiFillCreditCard },
  { href: "/market", label: "Market", icon: GiCoins },
  { href: "/trade", label: "Trade", icon: AiFillShop },
  { href: "/faq", label: "FAQ", icon: FcAbout },
];

const SecondHeader = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, setDarkTheme } = useDarkMode();

  return (
    <>
      <div className="dark:bg-[#120120] dark:text-white h-16 flex lg:hidden justify-between items-center px-6">
        <div className="flex gap-6">
          <div>
            <Menu>
              <Menu.Button>
                <RxHamburgerMenu className="text-3xl cursor-pointer " />
              </Menu.Button>
              <Menu.Items
                className={
                  "absolute shadow-md flex flex-col p-2 gap-1 rounded bg-white mt-2 border z-50 dark:border-white dark:border dark:border-opacity-10 dark:bg-[#120120]"
                }
              >
                {links.map((link) => (
                  <Menu.Item as="a" key={link.href} href={link.href}>
                    <div className="xsm:w-64 px-2 py-1 justify-between text-xl flex items-center hover:bg-gray-300 dark:hover:bg-white dark:hover:bg-opacity-[0.02] hover:rounded-sm">
                      <div className="flex items-center gap-2">
                        {<link.icon className="text-3xl" />}
                        {link.label}
                      </div>
                      {<AiOutlineRight className="text-2xl" />}
                    </div>
                  </Menu.Item>
                ))}
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="py-2">
                        <div className="xsm:w-64 px-2 py-1 flex items-center justify-between text-xl hover:bg-gray-300 hover:rounded-sm dark:hover:bg-white dark:hover:bg-opacity-[0.02]">
                          <div className="flex items-center text-xl gap-2">
                            <TbLanguageHiragana className="text-3xl" /> Language
                          </div>
                          {open ? (
                            <IoIosArrowDown className="text-2xl" />
                          ) : (
                            <AiOutlineRight className="text-2xl" />
                          )}
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="ul"
                        className="text-gray-500 flex flex-col gap-1 text-center"
                      >
                        <li
                          className="text-xl text-black hover:bg-gray-300 hover:rounded-sm cursor-pointer dark:text-white"
                          onClick={() => setLanguage("ENGLISH")}
                        >
                          ENGLISH
                        </li>
                        <li
                          className="text-xl text-black hover:bg-gray-300 hover:rounded-sm cursor-pointer dark:text-white"
                          onClick={() => setLanguage("FRENCH")}
                        >
                          FRENCH
                        </li>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Menu.Items>
            </Menu>
          </div>
          <label className="font-RobotoBold text-3xl">
            G<span className="text-[#0096FF] dark:text-[#0fae96]">.fi</span>
          </label>
        </div>
        <label
          className="cursor-pointer"
          onClick={() => {
            theme === "dark" ? setDarkTheme("light") : setDarkTheme("dark");
          }}
        >
          {theme === "dark" ? (
            <IoSunny className="text-3xl text-stone-400" />
          ) : (
            <IoMoon className="text-3xl text-stone-400" />
          )}
        </label>
      </div>
    </>
  );
};

export default SecondHeader;
