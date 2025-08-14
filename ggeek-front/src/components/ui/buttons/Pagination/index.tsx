import { useRouter } from "next/navigation";
import Styles from "./styles";
import utils from "@/utils";
import Image from "next/image";

// images
import IconPrev from "@/assets/image/icon/icon_prev.svg";
import IconNext from "@/assets/image/icon/icon_next.svg";

function Pagination({
  page,
  maxPage,
  list,
}: {
  page: number;
  maxPage: number;
  list: number[];
}) {
  const router = useRouter();

  const onClickPrev = () => {
    if (page == 1) return;
    router.push(
      utils.etc.getQueryParamUrl({
        page: page - 1,
      })
    );
  };

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push(
      utils.etc.getQueryParamUrl({
        page: e.currentTarget.value,
      })
    );
  };

  const onClickNext = () => {
    if (page == maxPage) return;
    router.push(
      utils.etc.getQueryParamUrl({
        page: page + 1,
      })
    );
  };

  return (
    <Styles.Container>
      <button type="button" className="prevBtn" onClick={onClickPrev}>
        <Image src={IconPrev} alt="이전" />
      </button>

      <div className="paginationWrap">
        {list?.map((item, index) => {
          return (
            <button
              type="button"
              value={item}
              className={page == item ? "on" : ""}
              onClick={onClickPage}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>

      <button type="button" className="nextBtn" onClick={onClickNext}>
        <Image src={IconNext} alt="다음" />
      </button>
    </Styles.Container>
  );
}

export { Pagination };

export default Pagination;
