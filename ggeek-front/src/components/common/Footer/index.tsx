"use client";

import Styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import useLanguage from "@/hooks/useLanguage";

// images
import LogoText from "@/assets/image/icon/logo_text.svg";

export default function Footer() {
  const { t } = useLanguage();

  const termsList = [
    {
      title: t("개인정보처리방침"),
      link: "privacy",
    },
    {
      title: t("이용약관"),
      link: "terms-of-use",
    },
  ];

  const quickMenuList = [
    {
      title: "Event",
      link: "/about/event",
    },
    {
      title: "OEM/ODM",
      link: "/oem-odm/contact-us",
    },
    {
      title: t("카카오톡 채널톡"),
      link: "https://pf.kakao.com/_xnvxnGK",
    },
    {
      title: "TOP",
      onClick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  ];

  return (
    <Styled.Container>
      <div className="inner">
        <div className="logo">
          <Image src={LogoText} alt="logo" />
        </div>

        <ul className="infoList">
          <li className="infoItem">
            {t("주소 : 경기도 고양시 덕양구 고골길 128-10 가동 양조장")}
          </li>
          <li className="infoItem">{t("전화번호 : 031-963-5225")}</li>
        </ul>

        <p className="copyright">
          Copyright© GGEEK BEER COMPANY. All rights reserved.
        </p>

        <ul className="termsList">
          {termsList.map((item, index) => (
            <li key={"termsItem" + index} className="termsItem">
              <Link href={`/terms/${item.link}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="quickMenuList">
        {quickMenuList.map((item, index) => (
          <li key={"quickMenuItem" + index} className="quickMenuItem">
            {item.link ? (
              <Link href={item.link}>{item.title}</Link>
            ) : (
              <button type="button" onClick={item.onClick}>
                {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </Styled.Container>
  );
}
