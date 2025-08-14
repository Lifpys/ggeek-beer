import Styles from "./styles";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

function FileInput({ id }: { id: string }) {
  const { t } = useLanguage("common");

  const [fileName, setFileName] = useState("");

  return (
    <Styles.Container>
      <p className="labelText">{t("파일 첨부")}</p>

      <div className="fileWrap">
        {fileName ? (
          <button
            type="button"
            className="deleteBtn"
            onClick={() => setFileName("")}
          >
            {t("삭제")}
          </button>
        ) : (
          <label htmlFor={id}>
            <input
              type="file"
              id={id}
              hidden
              onChange={(e: any) => setFileName(e.target.value)}
            />
            {t("파일 첨부")}
          </label>
        )}

        <p className={`fileName ${fileName ? "on" : ""}`}>
          {fileName
            ? fileName
            : t("최대 200mb 이내 / zip, pdf, docx, hwp 1개만 등록 가능")}
        </p>
      </div>
    </Styles.Container>
  );
}

export default FileInput;
