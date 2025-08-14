"use client";

import Styled from "./styles";
//components
import Tab from "@/components/layout/Tab";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabList = [
    {
      title: "Terms of Use",
      path: "terms-of-use",
    },
    {
      title: "Privacy Policy",
      path: "privacy",
    },
  ];

  return (
    <Styled.Container>
      <div className="inner">
        <h2 className="subPageTitle">Site Terms</h2>

        <div className="tab">
          <Tab firstPath="terms" list={tabList} />
        </div>

        {children}
      </div>
    </Styled.Container>
  );
}
