"use client";

import Link from "next/link";
import Styled from "./styles";
import Image from "next/image";
import { useState, useEffect } from "react";
import useLanguage from "@/hooks/useLanguage";
import { usePathname, useRouter } from "next/navigation";
import useModals from "@/hooks/useModals";
import { useMediaQuery } from "react-responsive";
import { PC, Mobile } from "@/hooks/useMediaQuery";
// images
import Logo from "@/assets/image/icon/logo.svg";
import LogoWhite from "@/assets/image/icon/logo_white.svg";
import IconLang from "@/assets/image/icon/icon_lang.svg";
import IconMenu from "@/assets/image/icon/icon_menu.svg";
import IconClose from "@/assets/image/icon/icon_close.svg";

export default function Header() {
  const pathname = usePathname();
  const modals = useModals();
  const router = useRouter();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [isScroll, setIsScroll] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<number | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMbMenuOpen, setIsMbMenuOpen] = useState(false);
  const [lang, setLang] = useState("KOR");
  const { setLanguage } = useLanguage();

  const isBg = isScroll !== 0 || isHover;
  const isMain = pathname === "/" && !isBg;

  const menuList = [
    {
      title: "About GGEEK",
      path: "about",
      list: [
        {
          title: "Brand Story",
          path: "brand-story",
        },
        {
          title: "GGEEK Event",
          path: "event",
        },
        {
          title: "Brewery",
          path: "brewery",
        },
        {
          title: "PUB",
          path: "pub",
        },
      ],
    },
    {
      title: "BEER",
      path: "beer",
      list: [
        {
          title: "Beer Finder",
          path: "beer-finder",
        },
        {
          title: "Year-Round",
          path: "year-round",
        },
        {
          title: "Monthly GGEEK",
          path: "monthly-ggeek",
        },
        {
          title: "Seasonal/Collab",
          path: "seasonal-collab",
        },
        {
          title: "Award & Media",
          path: "award-media",
        },
      ],
    },
    {
      title: "STORY",
      path: "story",
      list: [
        {
          title: "GGEEK Column",
          path: "ggeek-column",
        },
        {
          title: "Behind the Beer",
          path: "behind-the-beer",
        },
        {
          title: "Notice",
          path: "notice",
        },
      ],
    },
    {
      title: "OEM/ODM",
      path: "oem-odm",
      list: [
        {
          title: "Contact us",
          path: "contact-us",
        },
        {
          title: "FAQ",
          path: "faq",
        },
        {
          title: "Portfolio",
          path: "portfolio",
        },
      ],
    },
    {
      title: "VOC",
      path: "voc",
      list: [
        {
          title: "Contact us",
          path: "contact-us",
        },
        {
          title: "FAQ",
          path: "faq",
        },
      ],
    },
  ];

  const langList = ["KOR", "ENG"];

  const updateScroll = () => {
    // 팝업이 떴을 때는 스크롤 업데이트를 스킵
    const html = document.documentElement;
    if (html.classList.contains("hidden")) {
      return;
    }

    setIsScroll(window.pageYOffset || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [isScroll]);

  useEffect(() => {
    const html = document.documentElement;

    if (isMbMenuOpen || modals.mainPopupModal.show) {
      html.classList.add("hidden");
    } else {
      html.classList.remove("hidden");
    }
  }, [modals.mainPopupModal.show, isMbMenuOpen]);

  useEffect(() => {
    // 경로가 변경되면 모바일 메뉴/언어 드롭을 닫음
    setIsMbMenuOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  return (
    <>
      <Styled.Container
        className={`${isMain ? "main" : ""} ${isBg ? "bg" : ""}`}
        onMouseEnter={() => {
          if (!isMobile) {
            setIsHover(true);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsHover(false);
          }
        }}
      >
        <div className="wideInner">
          <h1>
            <Link href="/" className="logo">
              <Image src={isMain ? LogoWhite : Logo} alt="logo" />
            </Link>
          </h1>

          <PC>
            <ul className="menuList">
              {menuList.map((item, index) => (
                <li
                  key={"menuItem" + index}
                  className="menuItem"
                  onMouseLeave={() => setIsMenuOpen(null)}
                >
                  <Link
                    href={`/${item.path}${item.list ? `/${item.list?.[0]?.path}` : ""}`}
                    onMouseEnter={() => setIsMenuOpen(index)}
                  >
                    {item.title}
                  </Link>

                  {isMenuOpen === index && (
                    <ul className="subMenuList">
                      {item.list?.map((subItem, subIndex) => (
                        <li
                          key={"subMenuItem" + subIndex}
                          className="subMenuItem"
                        >
                          <Link href={`/${item.path}/${subItem.path}`}>
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="langBtnWrap">
              <button
                className="langBtn"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Image src={IconLang} alt="lang" />
              </button>

              {isLangOpen && (
                <ul className="langList">
                  {langList.map((item, index) => (
                    <li key={"langItem" + index} className="langItem">
                      <button
                        type="button"
                        className={`${lang === item ? "active" : ""}`}
                        onClick={() => {
                          setLang(item);
                          setLanguage(item === "ENG" ? "_en" : "");
                          setIsLangOpen(false);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </PC>

          <button
            type="button"
            className="menuBtn"
            onClick={() => setIsMbMenuOpen(true)}
          >
            <Image src={IconMenu} alt="menu" />
          </button>
        </div>
      </Styled.Container>

      <Mobile>
        {isMbMenuOpen && (
          <Styled.MobileMenu>
            <div className="inner">
              <button
                type="button"
                className="closeBtn"
                onClick={() => setIsMbMenuOpen(false)}
              >
                <Image src={IconClose} alt="close" />
              </button>

              <ul className="menuList">
                {menuList.map((item, index) => (
                  <li key={"menuItem" + index} className="menuItem">
                    <Link
                      href={`/${item.path}${`/${item.list?.[0]?.path}`}`}
                      onClick={() => setIsMbMenuOpen(false)}
                    >
                      {item.title}
                    </Link>

                    <ul className="subMenuList">
                      {item.list.map((subItem, subIndex) => (
                        <li
                          key={"subMenuItem" + subIndex}
                          className="subMenuItem"
                        >
                          <Link
                            href={`/${item.path}/${subItem.path}`}
                            onClick={() => setIsMbMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className="langBtnWrap">
                <div className="langIcon">
                  <Image src={IconLang} alt="lang" />
                </div>

                <ul className="langList">
                  {langList.map((item, index) => (
                    <li key={"langItem" + index} className="langItem">
                      <button
                        type="button"
                        className={`${lang === item ? "active" : ""}`}
                        onClick={() => {
                          setLang(item);
                          setLanguage(item === "ENG" ? "_en" : "");
                          setIsMbMenuOpen(false);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Styled.MobileMenu>
        )}
      </Mobile>
    </>
  );
}
