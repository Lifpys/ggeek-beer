"use client";

import Styled from "./styles";
import BasicButton from "@/components/ui/buttons/BasicButton";
import { useParams, useRouter } from "next/navigation";
import { getDateType } from "@/utils/date";
import { seasonalCollabList, awardMediaList } from "@/dummy/services/Dummy";
import useLanguage from "@/hooks/useLanguage";

export default function StoryDetailPage() {
  const { t } = useLanguage("common");

  const router = useRouter();
  const params = useParams();
  const page = params.page;
  const id = params.id;

  const list = () => {
    switch (page) {
      case "seasonal-collab":
        return seasonalCollabList;

      case "award-media":
        return awardMediaList;

      default:
        return [];
    }
  };

  const data = list().find((item) => item.id === id);

  return (
    <Styled.Container>
      <div className="titleWrap">
        <p className="date">{getDateType(data?.date)}</p>
        <p className="title">{data?.title}</p>
      </div>

      {/* 내부 스타일 지우고 사용 */}
      <div className="editor" style={{ height: "300px" }}></div>

      {data &&
        "fileList" in data &&
        data.fileList &&
        data.fileList.length > 0 && (
          <ul className="fileList">
            {data?.fileList.map((item) => (
              <li className="fileItem" key={"fileItem" + item.id}>
                <a
                  href={item.name}
                  download={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("다운로드")}
                </a>

                <p className="fileName">{item.name}</p>
              </li>
            ))}
          </ul>
        )}

      <BasicButton
        title={t("목록으로")}
        className="listBtn"
        onClick={() => router.back()}
      />
    </Styled.Container>
  );
}
