"use client";

import Styled from "./styles";
import { useParams } from "next/navigation";

export default function TermsPage() {
  const { id } = useParams();

  return (
    <Styled.Container>
      <div className="editorWrap">
        {id === "terms-of-use" ? "이용약관" : "개인정보 처리방침"}
      </div>
    </Styled.Container>
  );
}
