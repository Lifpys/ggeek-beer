"use client";

import Styled from "./styles";
import BasicInput from "@/components/ui/inputs/BasicInput";
import BasicTextarea from "@/components/ui/inputs/BasicTextarea";
import FileInput from "@/components/ui/inputs/FileInput";
import BasicCheckbox from "@/components/ui/inputs/BasicCheckbox";
import BasicButton from "@/components/ui/buttons/BasicButton";
import LinkBox from "@/components/layout/LinkBox";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useModals from "@/hooks/useModals";
import useLanguage from "@/hooks/useLanguage";
//img
import BgFaq from "@/assets/image/oem-odm/bg_faq.png";
import BgPortfolio from "@/assets/image/oem-odm/bg_portfolio.png";

export default function ContactUsPage() {
  const modal = useModals();
  const router = useRouter();
  const { t } = useLanguage("common");

  const [inputs, setInputs] = useState({
    companyName: "",
    position: "",
    name: "",
    phone: "",
    content: "",
  });

  const [agree, setAgree] = useState(false);

  const linkList = [
    {
      bg: BgFaq.src,
      title: "FAQ",
      desc: "OEM/ODM에 대해 자주 묻는 질문을 확인해 보세요!",
      href: "/oem-odm/faq",
    },
    {
      bg: BgPortfolio.src,
      title: "PORTFOLIO",
      desc: "끽비어 컴퍼니의 포트폴리오를 확인해 보세요!",
      href: "/oem-odm/portfolio",
    },
  ];

  return (
    <Styled.Container>
      <form>
        <fieldset>
          <legend className="sr-only">Contact us</legend>

          <ul className="inputList">
            <li className="inputItem">
              <BasicInput
                data={{
                  labelText: t("[필수] 회사명"),
                  id: "companyName",
                  placeholder: t("회사명을 입력해 주세요."),
                  errorText: t("회사명을 입력해 주세요."),
                }}
                value={inputs.companyName}
                setInputs={setInputs}
              />
            </li>

            <li className="inputItem">
              <BasicInput
                data={{
                  labelText: t("[필수] 직함"),
                  id: "position",
                  placeholder: t("직함을 입력해 주세요."),
                  errorText: t("직함을 입력해 주세요."),
                }}
                value={inputs.position}
                setInputs={setInputs}
              />
            </li>

            <li className="inputItem">
              <BasicInput
                data={{
                  labelText: t("[필수] 이름"),
                  id: "name",
                  placeholder: t("이름을 입력해 주세요."),
                  errorText: t("이름을 입력해 주세요."),
                }}
                value={inputs.name}
                setInputs={setInputs}
              />
            </li>

            <li className="inputItem">
              <BasicInput
                data={{
                  labelText: t("[필수] 연락처"),
                  id: "phone",
                  placeholder: "ex) 010-1234-5678",
                  errorText: t("연락처를 입력해 주세요."),
                }}
                value={inputs.phone}
                setInputs={setInputs}
              />
            </li>

            <li className="inputItem">
              <BasicTextarea
                data={{
                  labelText: t("[필수] 문의 내용"),
                  id: "content",
                  placeholder: t("문의 내용을 입력해 주세요."),
                  errorText: t("문의 내용을 입력해 주세요."),
                }}
                value={inputs.content}
                setInputs={setInputs}
              />
            </li>

            <li className="inputItem">
              <FileInput id="file" />
            </li>

            <li className="inputItem">
              <BasicCheckbox
                labelText={t("[필수] 약관 동의")}
                id="privacy"
                checkText={t("개인정보취급방침에 동의합니다.")}
                checked={agree}
                onChange={() => setAgree(!agree)}
                children={
                  <Link
                    href="/terms/privacy"
                    target="_blank"
                    className="privacyLink"
                  >
                    {t("약관 보기")}
                  </Link>
                }
              />
            </li>
          </ul>

          <div className="submitBtn">
            <BasicButton
              title={t("문의하기")}
              onClick={() => {
                // --- 첨부 파일 조건 확인
                // modal.setDefaultModal({
                //   ...modal.defaultModal,
                //   show: true,
                //   title: t("첨부 파일 조건을 확인해 주세요."),
                //   text: t(
                //     "최대 200mb 이내로 zip, pdf, docx, hwp 파일만 첨부가 가능합니다."
                //   ),
                //   subBtnText: t("확인"),
                // });
                // --- 약관 미동의 시
                // modal.setDefaultModal({
                //   ...modal.defaultModal,
                //   show: true,
                //   title: t("개인정보취급방침에 동의해 주세요."),
                //   text: t(
                //     "개인정보 사용에 대한 동의가 필요합니다. 약관을\n확인해 주세요."
                //   ),
                //   subBtnText: t("확인"),
                // });
                // --- 완료
                modal.setDefaultModal({
                  ...modal.defaultModal,
                  show: true,
                  title: t("문의가 완료되었습니다."),
                  text: t(
                    "담당자 확인 후 영업일 기준 3~5일 이내로 개별 연락드리도록 하겠습니다. 감사합니다."
                  ),
                  mainBtnText: t("메인으로"),
                  mainBtnClick() {
                    router.push("/");
                  },
                });
              }}
            />
          </div>
        </fieldset>
      </form>

      <div className="linkList">
        {linkList.map((item, index) => (
          <LinkBox data={item} key={index} />
        ))}
      </div>
    </Styled.Container>
  );
}
