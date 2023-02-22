import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { VscGlobe } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import ScrollProgress from "../../common/ScrollProgress";
import LanguageContext from "../../../util/context";
import useDarkMode from "../../../util/useDarkMode";

const options = [{ language: "English" }, { language: "French" }];

type LinksType = {
  href: string;
  title: string;
};

type GoldDustLinkType = {
  to: string;
  title: string;
};

const MenuLink: LinksType[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/market", title: "Market" },
  { href: "/trade", title: "Trade" },
  { href: "/faq", title: "FAQ" },
];

const GoldDustLink: React.FC<GoldDustLinkType> = ({ to, title }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
 

  return (
    <Link to={to} className={`${match ? `text-[#0096FF] dark:text-[#0fae96]` : `text-[#4D625F] dark:text-white`}`}>
      {title}
    </Link>
  );
};

const GoldDustHeader = () => {
  const [lang, SetLang] = useState<string>("EN");
  const { language, setLanguage } = useContext(LanguageContext);
  const {theme,setDarkTheme} = useDarkMode();

  return (
    <>
      <ScrollProgress />
      <header className="lg:h-[90px] dark:bg-[#120120] hidden lg:flex items-center justify-between lg:w-full px-24 absolute z-50 lg:relative bg-white">
        <div className="text-2xl font-RalewayBold dark:text-white">
          GoldDust.<span className="text-[#0096FF] dark:text-[#0fae96]">fi</span>
        </div>
        <HStack className="flex gap-[30px] text-base text-[#4D625F] font-RalewayBold">
          {MenuLink.map((item, index) => {
            return (
              <GoldDustLink key={index} to={item.href} title={item.title} />
            );
          })}
        </HStack>
        <div className="flex gap-4 items-center">
          <div>
            <Menu>
              {({ open }: any) => (
                <>
                  <Menu.Button
                    as="button"
                    className={
                      "flex justify-center items-center gap-2 px-[5px] font-RalewaySemiBold dark:text-white"
                    }
                  >
                    <div>
                      <VscGlobe />
                    </div>
                    <div>{lang}</div>
                    <BsChevronDown />
                  </Menu.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    {open && (
                      <Menu.Items
                        className={
                          "border w-[100px] shadow-lg bg-white rounded-sm p-[2px] gap-[5px] mt-[5px] -translate-x-2 z-40 absolute"
                        }
                      >
                        {options.map((item, index) => {
                          return (
                            <Menu.Item key={index}>
                              {({ active }: any) => (
                                <h1
                                  className="cursor-pointer font-RalewaySemiBold text-center hover:bg-blue-500 mt-[2px] hover:text-white"
                                  onClick={() => {
                                    SetLang(
                                      item.language
                                        .toUpperCase()
                                        .substring(0, 2)
                                    );
                                    setLanguage(item.language);
                                  }}
                                >
                                  {item.language}
                                </h1>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </Menu.Items>
                    )}
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <button className="bg-[#0096ff] dark:bg-[#0fae96] text-white rounded">
            <Link to={""} className="py-[12px] px-[10px] font-RalewaySemiBold">
              Lightpaper
            </Link>
          </button>
          <IconButton
            aria-label="Search database"
            fontSize={"30px"}
            boxSize={"40"}
            _dark={{ color: "#ffffff" }}
            _light={{ color: "#cccccc" }}
            icon={theme === "dark" ? <IoMoon className="dark:text-white"/> : <IoSunny />}
            onClick={()=>{theme==="dark"?setDarkTheme("light"):setDarkTheme("dark");}}
          />
        </div>
      </header>
    </>
  );
};

export default GoldDustHeader;
