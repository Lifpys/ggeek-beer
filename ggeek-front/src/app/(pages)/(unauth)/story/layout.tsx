"use client";

import Styled from "./styles";
import { usePathname } from "next/navigation";
//components
import Tab from "@/components/layout/Tab";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabList = [
    {
      title: "GGEEK Column",
      path: "ggeek-column",
    },
    {
      title: "Behind the Beer",
      path: "behind-the-beer",
    },
    {
      title: "Notice",
      path: "notice",
    },
  ];

  return (
    <Styled.Container>
      <div className="inner">
        {!pathname.includes("detail") && (
          <>
            <h2 className="subPageTitle">STORY</h2>
            <div className="tab">
              <Tab firstPath="story" list={tabList} />
            </div>
          </>
        )}

        {children}
      </div>
    </Styled.Container>
  );
}
