import React from "react";

//숫자 3자리수 콤마 코드
function numberWithCommas(x: number) {
  try {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (e) {
    return "0";
  }
}

function getFilterStr(parameter: Record<string, string>) {
  let filter = new URLSearchParams(parameter).toString();
  return decodeURIComponent(filter);
}

function getSearchParam() {
  try {
    return JSON.parse(
      '{"' +
        decodeURI(
          window.location.search
            .substring(1)
            .replace(/&/g, '","')
            .replace(/=/g, '":"')
        ) +
        '"}'
    );
  } catch (e) {
    return {};
  }
}

function getQueryParamUrl(
  obj: Record<string, any>,
  isClear?: boolean,
  isParamOnly?: boolean
) {
  try {
    obj = obj ? obj : {};
    let searchParam = isClear ? {} : getSearchParam();
    for (let key in obj) {
      if (obj[key] == null) {
        delete searchParam[key];
        continue;
      }
      searchParam[key] = obj[key];
    }
    if (isParamOnly) {
      return getFilterStr(searchParam);
    }
    return `${window.location.pathname}?${getFilterStr(searchParam)}`;
  } catch (e) {
    return "";
  }
}

function brParser(str: string) {
  return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function markKeywordInHTML(htmlString: string, keyword: string) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  const escapedKeyword = escapeRegExp(keyword);

  function traverseNodes(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const regex = new RegExp(`(${escapedKeyword})`, "gi");
      const newNodeContent = node.nodeValue?.replace(
        regex,
        '<mark class="highlighted">$1</mark>'
      );
      if (newNodeContent) {
        const tempSpan = document.createElement("span");
        tempSpan.innerHTML = newNodeContent;
        while (tempSpan.firstChild) {
          node.parentNode?.insertBefore(tempSpan.firstChild, node);
        }
        node.parentNode?.removeChild(node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
      Array.from(node.childNodes).forEach((child) => traverseNodes(child));
    }
  }

  traverseNodes(tempDiv);

  return tempDiv.innerHTML;
}

// 검색어 하이라이팅
const highlighting = (v: string, keyword: string) => {
  const text = v.split(keyword);

  return text.map((item: string, index: number) => {
    return (
      <React.Fragment key={"text" + index}>
        {index > 0 && <mark className="highlighting">{keyword}</mark>}
        {item}
      </React.Fragment>
    );
  });
};

// 검색어 하이라이팅 대소문자 무시
const highlightIgnoreCase = (v: string, keyword: string) => {
  const lowerCaseV = v.toLowerCase();
  const lowerCaseKeyword = keyword.toLowerCase();
  const text = lowerCaseV.split(lowerCaseKeyword);

  let currentIndex = 0;

  return text.map((item: string, index: number) => {
    const originalText = v.substring(currentIndex, currentIndex + item.length);
    currentIndex += item.length + keyword.length;

    return (
      <React.Fragment key={"text" + index}>
        {originalText}
        {index < text.length - 1 && (
          <mark className="highlighting">
            {v.substring(currentIndex - keyword.length, currentIndex)}
          </mark>
        )}
      </React.Fragment>
    );
  });
};

export {
  numberWithCommas,
  getFilterStr,
  getSearchParam,
  getQueryParamUrl,
  brParser,
  markKeywordInHTML,
  highlighting,
  highlightIgnoreCase,
};

export default {
  numberWithCommas,
  getFilterStr,
  getSearchParam,
  getQueryParamUrl,
  brParser,
  markKeywordInHTML,
  highlighting,
  highlightIgnoreCase,
};
