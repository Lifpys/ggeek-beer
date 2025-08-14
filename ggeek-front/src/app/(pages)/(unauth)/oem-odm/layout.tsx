"use client";

import Styled from "./styles";
//components
import Tab from "@/components/layout/Tab";

export default function OemOdmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabList = [
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
  ];

  return (
    <Styled.Container>
      <div className="inner">
        <h2 className="subPageTitle">OEM/ODM</h2>

        <div className="tab">
          <Tab firstPath="oem-odm" list={tabList} />
        </div>

        {children}
      </div>
    </Styled.Container>
  );
}
