import Styles from "./styles";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";
//img
import IconSearch from "@/assets/image/icon/icon_search.svg";

function SearchInput({
  value,
  setValue,
  onSearch,
  total,
}: {
  value: any;
  setValue: any;
  onSearch?: () => void;
  total?: number;
}) {
  const { t, suffix } = useLanguage("common");

  return (
    <Styles.Container>
      <p className="total">
        {suffix === "_en" ? (
          <>
            We’ve got <span>{total || 0}</span> stories to share.
          </>
        ) : (
          <>
            총 <span>{total || 0}건</span>의 글이 있습니다.
          </>
        )}
      </p>

      <div className="input">
        <input
          autoComplete="off"
          type="text"
          id="searchInput"
          placeholder={t("검색어를 입력해주세요.")}
          value={value !== undefined ? value : ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && onSearch) {
              onSearch();
            }
          }}
        />

        <button type="button" className="searchBtn" onClick={onSearch}>
          <Image src={IconSearch} alt="search" />
        </button>
      </div>
    </Styles.Container>
  );
}

export default SearchInput;
