"use client";

import Styled from "./styles";
//components
import Tab from "@/components/layout/Tab";

export default function VocLayout({ children }: { children: React.ReactNode }) {
  const tabList = [
    {
      title: "Contact us",
      path: "contact-us",
    },
    {
      title: "FAQ",
      path: "faq",
    },
  ];

  return (
    <Styled.Container>
      <div className="inner">
        <h2 className="subPageTitle">VOC</h2>

        <div className="tab">
          <Tab firstPath="voc" list={tabList} />
        </div>

        {children}
      </div>
    </Styled.Container>
  );
}
