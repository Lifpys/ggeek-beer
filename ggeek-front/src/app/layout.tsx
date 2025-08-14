import "@/styles/globals.css";
import "@/styles/editor-reset.css";
import "@/styles/editor-styles.css";
import Script from "next/script";

import { Metadata } from "next";

const url = "https://ggeekbeer.com";

export const metadata: Metadata = {
  title: "맥주를 새롭게 다시 생각하다",
  description:
    "끽비어는 유행보다 본질을, 정답보다 질문을 택합니다. 한국의 감각으로, 지금의 맥주를 다시 만듭니다.",
  icons: {
    icon: `${url}/meta/favicon.png`,
  },
  openGraph: {
    title: "맥주를 새롭게 다시 생각하다",
    description:
      "끽비어는 유행보다 본질을, 정답보다 질문을 택합니다. 한국의 감각으로, 지금의 맥주를 다시 만듭니다.",
    images: [`${url}/meta/img_meta.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "맥주를 새롭게 다시 생각하다",
    description:
      "끽비어는 유행보다 본질을, 정답보다 질문을 택합니다. 한국의 감각으로, 지금의 맥주를 다시 만듭니다.",
    images: [`${url}/meta/img_twitter_meta.png`],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Script
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=xesjhjrpo4&submodules=geocoder`}
        ></Script>
        {children}
      </body>
    </html>
  );
}
