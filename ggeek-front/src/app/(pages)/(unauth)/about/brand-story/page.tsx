"use client";

import Styled from "./styles";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
//img
import ImgBrandStory01 from "@/assets/image/about/img_brand_story01.jpg";
import ImgBrandStory02 from "@/assets/image/about/img_brand_story02.jpg";
import ImgBrandStory03 from "@/assets/image/about/img_brand_story03.jpg";
import ImgBrandStory04 from "@/assets/image/about/img_brand_story04.jpg";
import ImgBrandStory05 from "@/assets/image/about/img_brand_story05.png";
import IconFlag from "@/assets/image/icon/icon_flag.svg";
import IconBottle from "@/assets/image/icon/icon_bottle.svg";
import IconPerson from "@/assets/image/icon/icon_person.svg";
import IconBeer from "@/assets/image/icon/icon_beer.svg";

export default function BrandStoryPage() {
  const { t } = useLanguage("about");

  const list = [
    {
      icon: IconBottle,
      title: <b>{t("어떻게 우리는 맥주를 만들까")}</b>,
      desc: (
        <>
          {t(
            "기술은 기본, 감각은 끽비어답게. 끽비어의 맥주는 매달 새롭게 태어납니다."
          )}
          <br />
          {t(
            "제철 재료, 그때의 기분, 어딘가에서 스쳐간 향과 온도까지도 담아냅니다."
          )}
          <br />
          {t("우리만의 방식으로, 우리만의 리듬으로.")} <br />
          <br />
          {t("맥주의 세계에 ‘한국다움’이 있다면")} <br />
          {t(
            "우리는 그걸 계절의 맛, 낯선 향기, 정겨운 감정 같은 데서 찾습니다."
          )}
          <br />
          <br />
          {t("장인의 정교함에")} <br />
          {t("우리의 취향을 더해 만든")} <br />
          {t("맥주답지만, 끽비어다운 맥주.")} <br />
          {t("그게 우리의 방식입니다.")}
        </>
      ),
      img: ImgBrandStory02,
    },
    {
      icon: IconPerson,
      title: <b>{t("우리는 맥주를 뭐라고 믿을까")}</b>,
      desc: (
        <>
          {t("맥주는 결국, 사람입니다.")} <br />
          {t("잘 만든 맥주 하나는 좋은 공연보다 더 짜릿하고,")} <br />
          {t("잘 고른 맥주 한 잔은 낯선 대화도 친구처럼 이어줍니다.")} <br />
          {t(
            "그래서 우리는 음악과 전시, 도시의 풍경과 맥주를 함께 엮습니다"
          )}{" "}
          <br />
          {t(
            "맥주가 누군가의 하루를 바꾸는 순간, 그 장면을 우리는 자주 목격해요."
          )}
          <br />
          {t(
            "맥주로 이어지는 사람, 공간, 기억. 끽비어는 그 연결의 언어가 되고 싶습니다."
          )}
        </>
      ),
      img: ImgBrandStory03,
    },
    {
      icon: IconBeer,
      title: (
        <>
          <b>{t("우리는 이렇게 말합니다.")}</b> <br />
          {t("수제 맥주의 한국화.")}
        </>
      ),
      desc: t("우리가 먼저 시작합니다. 그리고 제대로 만들어갑니다."),
      img: ImgBrandStory04,
    },
  ];

  return (
    <Styled.Container>
      <section className="section01">
        <div className="img">
          <Image src={ImgBrandStory01} alt="brand story 01" fill sizes="100%" />
        </div>

        <div className="textWrap">
          <div className="icon">
            <Image src={IconFlag} alt="flaㄴㅠ" />
          </div>

          <p className="title">
            <b>{t("왜 우리는 맥주를 만들까")}</b>
          </p>

          <div className="descWrap">
            <p className="desc">
              {t("시작은 단순했습니다. 우리 입에 딱 맞는 맥주가 없었거든요.")}{" "}
              <br />
              {t(
                "그게 늘 궁금했어요. 왜 우리가 좋아하는 맛은 항상 어딘가 ‘외국의 감각’일까."
              )}
              <br />
              {t(
                "을지로 골목의 작은 펍, 장비 하나 없이 그 질문에 답해보자며 우리는 맥주를 만들기 시작했죠."
              )}
            </p>

            <p className="desc">
              {t("누구에게 잘 보이기보단")} <br />
              {t(
                "우리 스스로에게 솔직하고 싶은 맛. 한국의 입맛, 한국의 기분, 그리고 지금 이 순간을 담은 맥주."
              )}
              <br />
              {t("우리가 만들고 싶은 건, 그런 거였어요.")}
            </p>
          </div>
        </div>
      </section>

      {list.map((item, index) => (
        <section className={`section0${index + 2}`} key={index}>
          <div className="textWrap">
            <div className="icon">
              <Image src={item.icon} alt="person" />
            </div>

            <p className="title">{item.title}</p>

            <p className="desc">{item.desc}</p>
          </div>

          <div className="img">
            <Image src={item.img} alt="brand story img" fill sizes="100%" />
          </div>
        </section>
      ))}

      <div className="img05">
        <Image src={ImgBrandStory05} alt="brand story 05" />
      </div>
    </Styled.Container>
  );
}
