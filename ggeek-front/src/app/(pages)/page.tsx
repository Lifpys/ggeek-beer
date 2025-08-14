"use client";

import Styled from "./styles";
import LinkBox from "@/components/layout/LinkBox";
import useModals from "@/hooks/useModals";
import useLanguage from "@/hooks/useLanguage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductList from "@/components/layout/ProductList";
import {
  bannerList,
  yearRoundList,
  monthlyList,
  behindTheBeerList,
  mediaList,
  noticeList,
} from "@/dummy/services/Dummy";
import { getDateType } from "@/utils/date";
import { useMediaQuery } from "react-responsive";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
//img
import ImgFind from "@/assets/image/main/img_find.png";
import BgBrewery from "@/assets/image/main/bg_brewery.png";
import BgPub from "@/assets/image/main/bg_pub.png";
import IconPrev from "@/assets/image/icon/icon_prev02.svg";
import IconNext from "@/assets/image/icon/icon_next02.svg";

export default function MainPage() {
  const modal = useModals();
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    modal.setMainPopupModal({
      ...modal.mainPopupModal,
      show: true,
    });
  }, []);

  const linkList = [
    {
      href: "/brewery",
      title: "Brewery",
      bg: BgBrewery.src,
    },
    {
      href: "/pub",
      title: "Pub",
      bg: BgPub.src,
    },
  ];

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  return (
    <Styled.Container>
      <section className="bannerSection">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {bannerList.map((item, index) => (
            <SwiperSlide className="bannerItem" key={`bannerItem${index}`}>
              <Link target="_blank" href={item.link || "/"}>
                <Image
                  src={mobile ? item.mbImg : item.img}
                  alt="banner"
                  fill
                  sizes="100%"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="yearRoundSection">
        <div className="inner">
          <h2 className="sectionTitle">Year-round</h2>

          {yearRoundList.length > 0 && (
            <div className="slider">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={"auto"}
                speed={1000}
              >
                {yearRoundList.map((item, index) => (
                  <SwiperSlide
                    className="sliderItem"
                    key={"yearRound" + item.id}
                  >
                    <ProductList data={item} href={`/beer/year-round`} hover />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>

      <section className="findSection">
        <div className="wideInner">
          <div className="inner">
            <div className="textWrap">
              <p>BEER FINDER</p>
              <p>{t("나에게 가장 잘 맞는 맥주 찾기")}</p>
            </div>

            <div className="img">
              <Image src={ImgFind} alt="find" width={600} height={380} />
            </div>

            <h2 className="sectionTitle">
              <Link href={"/beer/beer-finder"}>Find it</Link>
            </h2>
          </div>
        </div>
      </section>

      <section className="montlySection">
        <div className="inner">
          <h2 className="sectionTitle">
            <Link href={"/yet"}>Monthly GGEEK</Link>
          </h2>

          <ul className="list">
            {monthlyList.slice(0, mobile ? 4 : 5).map((item) => (
              <li className="item" key={"monthly" + item.id}>
                <ProductList data={item} href={"/yet"} saleShowYn monthShowYn />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="behindSection">
        <div className="inner">
          <h2 className="sectionTitle">
            <Link href={"/story/behind-the-beer"}>Behind the Beer</Link>
          </h2>

          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1000}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            loop={true}
            navigation={{
              nextEl: ".behindNextBtn",
              prevEl: ".behindPrevBtn",
            }}
          >
            {behindTheBeerList.map((item) => (
              <SwiperSlide key={"behindItem" + item.id} className="behindItem">
                <Link
                  href={`/story/behind-the-beer/detail/${item.id}`}
                  className="textWrap"
                >
                  <p className="title">{item.title}</p>
                  <p className="date">{getDateType(item.date, "/")}</p>
                </Link>

                <div className="img">
                  <Image src={item.img} alt={item.title} fill sizes="100%" />
                </div>
              </SwiperSlide>
            ))}

            <div className="navigation">
              <button type="button" className="behindPrevBtn">
                <Image src={IconPrev} alt="prev" />
              </button>
              <button type="button" className="behindNextBtn">
                <Image src={IconNext} alt="next" />
              </button>
            </div>
          </Swiper>
        </div>
      </section>

      <section className="mediaSection">
        <div className="inner">
          <h2 className="sectionTitle">
            <Link href={"/yet"}>Award & Media</Link>
          </h2>

          <ul className="list">
            {mediaList.slice(0, mobile ? 4 : 5).map((item) => (
              <li className="item" key={"media" + item.id}>
                <ProductList data={item} href={"/yet"} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="noticeSection">
        <div className="inner">
          <h2 className="sectionTitle">
            <Link href={"/story/notice"}>Notice</Link>
          </h2>

          <ul className="list">
            {noticeList.slice(0, 5).map((item) => (
              <li className="item" key={"notice" + item.id}>
                <Link href={`/story/notice/detail/${item.id}`}>
                  <p className="title">{item.title}</p>

                  <p className="date">{getDateType(item.date, "/")}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="linkSection">
        <div className="inner">
          <ul className="linkList">
            {linkList.map((item, index) => (
              <li className="linkItem" key={"link" + index}>
                <LinkBox data={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Styled.Container>
  );
}
