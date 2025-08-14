"use client";

import Styled from "./styles";
import Image from "next/image";
import EmptyText from "@/components/layout/EmptyText";
import BasicButton from "@/components/ui/buttons/BasicButton";
import ProductList from "@/components/layout/ProductList";
import { useState } from "react";
import { recommendList } from "@/dummy/services/Dummy";
import useLanguage from "@/hooks/useLanguage";
//img
import ImgTaste01 from "@/assets/image/beer/img_taste01.png";
import ImgTaste02 from "@/assets/image/beer/img_taste02.png";
import ImgTaste03 from "@/assets/image/beer/img_taste03.png";
import ImgTaste04 from "@/assets/image/beer/img_taste04.png";
import ImgTaste05 from "@/assets/image/beer/img_taste05.png";
import ImgFood01 from "@/assets/image/beer/img_food01.png";
import ImgFood02 from "@/assets/image/beer/img_food02.png";
import ImgFood03 from "@/assets/image/beer/img_food03.png";
import ImgFood04 from "@/assets/image/beer/img_food04.png";
import ImgFood05 from "@/assets/image/beer/img_food05.png";
import ImgFood06 from "@/assets/image/beer/img_food06.png";

export default function BeerFinderPage() {
  const { t } = useLanguage("beer");

  const [taste, setTaste] = useState<string>("");
  const [food, setFood] = useState<string>("");
  const [recommend, setRecommend] = useState<boolean>(false);

  const tasteList = [
    {
      img: ImgTaste01.src,
      title: "산미",
      enTitle: "Sourness",
    },
    {
      img: ImgTaste02.src,
      title: "쌉쌀",
      enTitle: "Bitterness",
    },
    {
      img: ImgTaste03.src,
      title: "단맛",
      enTitle: "Sweetness",
    },
    {
      img: ImgTaste04.src,
      title: "고소",
      enTitle: "Toastiness",
    },
    {
      img: ImgTaste05.src,
      title: "묵직",
      enTitle: "Full Body",
    },
  ];

  const foodList = [
    {
      img: ImgFood01.src,
      title: "Spicy",
    },
    {
      img: ImgFood02.src,
      title: "Fried",
    },
    {
      img: ImgFood03.src,
      title: "Greasy",
    },
    {
      img: ImgFood04.src,
      title: "Clean",
    },
    {
      img: ImgFood05.src,
      title: "Sweet",
    },
    {
      img: ImgFood06.src,
      title: "Herb & Spice",
    },
  ];

  return (
    <Styled.Container>
      <div className="sectionTitle">
        <h2>{t(`오늘, \n어떤 맥주가 어울릴까요?`)}</h2>
        <p>
          {t(
            `지금의 입맛, 오늘의 음식에 맞춰 \n끽비어가 어울리는 맥주를 추천해드립니다.`
          )}
        </p>
        <p>{t(`맛과 음식, 두 가지 기준을 선택해 주세요.`)}</p>
      </div>

      <div className="tasteSelect">
        <p className="selectTitle">Taste</p>

        <ul className="list">
          {tasteList.map((item) => (
            <li className="item" key={item.title}>
              <div className="img">
                <Image src={item.img} alt={item.title} fill sizes="100%" />
              </div>

              <p className="title">{item.title}</p>

              <p className="enTitle">{item.enTitle}</p>

              <label htmlFor={item.enTitle}>
                <input
                  type="radio"
                  name="taste"
                  hidden
                  value={item.enTitle}
                  onChange={(e) => setTaste(e.target.value)}
                  id={item.enTitle}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="foodSelect">
        <p className="selectTitle">Food</p>

        {taste ? (
          <>
            <ul className="list">
              {foodList.map((item) => (
                <li className="item" key={item.title}>
                  <div className="img">
                    <Image src={item.img} alt={item.title} fill sizes="100%" />
                  </div>

                  <p className="title">{item.title}</p>

                  <label htmlFor={item.title}>
                    <input
                      type="radio"
                      name="food"
                      hidden
                      value={item.title}
                      onChange={(e) => setFood(e.target.value)}
                      id={item.title}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <EmptyText text={t("Taste를 선택해 주세요")} />
        )}
      </div>

      {taste && food && (
        <BasicButton
          title={t("맥주 추천 받기")}
          className="recommendBtn"
          onClick={() => {
            setRecommend(true);
          }}
        />
      )}

      {recommend && (
        <div className="result">
          <div className="textWrap">
            <p className="title">{t("끽비어 추천 맥주")}</p>

            <ul className="selectedList">
              <li className="selectedItem">
                <b>Taste</b>
                <span>{taste}</span>
              </li>

              <li className="selectedItem">
                <b>Food</b>
                <span>{food}</span>
              </li>
            </ul>

            <BasicButton
              title={t("다시 하기")}
              className="resetBtn white"
              onClick={() => {
                window.location.reload();
              }}
            />
          </div>

          <ul className="productList">
            {recommendList.map((item) => (
              <li className="item" key={item.id}>
                <ProductList
                  data={item}
                  target
                  href={`/product/${item.id}`}
                  saleShowYn
                  monthShowYn
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Styled.Container>
  );
}
