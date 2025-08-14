"use client";

import Styled from "./styles";
import { usePathname } from "next/navigation";
//components
import Tab from "@/components/layout/Tab";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabList = [
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
  ];

  return (
    <Styled.Container>
      <div className="inner">
        <h2 className="subPageTitle">About GGEEK</h2>

        {!pathname.includes("detail") && (
          <div className="tab">
            <Tab firstPath="about" list={tabList} />
          </div>
        )}

        {children}
      </div>
    </Styled.Container>
  );
}
