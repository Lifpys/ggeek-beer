"use client";

import Styled from "./styles";
import { usePathname } from "next/navigation";
//components
import Tab from "@/components/layout/Tab";

export default function BeerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabList = [
    {
      title: "Beer Finder",
      path: "beer-finder",
    },
    {
      title: "Year-Round",
      path: "year-round",
    },
    {
      title: "Monthly GGEEK",
      path: "monthly-ggeek",
    },
    {
      title: "Seasonal/Collab",
      path: "seasonal-collab",
    },
    {
      title: "Award & Media",
      path: "award-media",
    },
  ];

  return (
    <Styled.Container>
      <div className="inner">
        {!["seasonal-collab/detail", "award-media/detail"].some((seg) =>
          pathname.includes(seg)
        ) && <h2 className="subPageTitle">BEER</h2>}

        {!pathname.includes("detail") && (
          <div className="tab">
            <Tab firstPath="beer" list={tabList} />
          </div>
        )}

        {children}
      </div>
    </Styled.Container>
  );
}
