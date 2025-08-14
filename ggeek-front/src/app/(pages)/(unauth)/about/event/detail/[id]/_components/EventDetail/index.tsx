"use client";

import Styled from "./styles";
import BasicButton from "@/components/ui/buttons/BasicButton";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function EventDetailPage({ data }: { data: any }) {
  const { t } = useLanguage("about");

  const [isMoreView, setIsMoreView] = useState(false);

  return (
    <Styled.Container>
      <div className="titleWrap">
        <p className="date">
          {data.start} {data.end && `~ ${data.end}`}
        </p>
        <p className="title">{data.title}</p>
      </div>

      <div className={`editor ${isMoreView ? "more" : ""}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
        ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        quaerat ipsam nesciunt consequatur exercitationem, iure odio recusandae
        doloribus. Voluptatum, earum doloribus! Doloribus similique neque, aut
        iste nostrum pariatur error! Harum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Optio quaerat ipsam nesciunt consequatur
        exercitationem, iure odio recusandae doloribus. Voluptatum, earum
        doloribus! Doloribus similique neque, aut iste nostrum pariatur error!
        Harum.
      </div>

      {!isMoreView && (
        <BasicButton
          title={t("자세히 보기")}
          className="moreViewBtn"
          onClick={() => {
            setIsMoreView(true);
          }}
        />
      )}
    </Styled.Container>
  );
}
