"use client";

import Styled from "./styles";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import useLanguage from "@/hooks/useLanguage";
//img
import ImgBrewery01 from "@/assets/image/about/img_brewery01.jpg";
import ImgBrewery02 from "@/assets/image/about/img_brewery02.jpg";
import ImgPub01 from "@/assets/image/about/img_pub01.jpg";
import ImgPub02 from "@/assets/image/about/img_pub02.jpg";
import ImgPub03 from "@/assets/image/about/img_pub03.jpg";
import IconLocation from "@/assets/image/icon/icon_location.svg";

export default function LocationPage() {
  const { page } = useParams();
  const { t } = useLanguage("about");

  const data = {
    brewery: {
      img: [ImgBrewery01, ImgBrewery02],
      address: t("경기도 고양시 덕양구 고골길 128-10 가동 양조장"),
      map: "",
      time: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ",
      contactTitle: t("양조장 관련 문의"),
      contact: [<>TEL &nbsp; 031-963-5225</>, <>FAX &nbsp; 031-963-1823</>],
    },

    pub: {
      img: [ImgPub01, ImgPub02, ImgPub03],
      address: t("서울시 중구 을지로 157 3층 다열 376호 펍"),
      map: "",
      time: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ",
      contactTitle: t("펍 관련 문의"),
      contact: [<a href="tel:070-8152-1234">TEL &nbsp; 070-8152-1234</a>],
    },
  };

  const pageData = data[page as keyof typeof data];

  return (
    <Styled.Container>
      <div className={`imgWrap ${page}`}>
        {pageData.img.map((img: StaticImageData, index: number) => (
          <div className="imgItem" key={index}>
            <Image src={img} alt="img" fill sizes="100%" />
          </div>
        ))}
      </div>
      <div className="address">
        <div className="icon">
          <Image src={IconLocation} alt="icon" />
        </div>

        {pageData.address}
      </div>

      <div className="map"></div>

      <div className="info">
        <div className="time">
          <div className="title">{t("운영 시간")}</div>

          <p className="text">{pageData.time}</p>
        </div>

        <div className="contact">
          <div className="title">{pageData.contactTitle}</div>

          <ul className="contactList">
            {pageData.contact.map(
              (item: string | React.ReactNode, index: number) => (
                <li className="contactItem" key={index}>
                  <p className="text">{item}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Styled.Container>
  );
}
