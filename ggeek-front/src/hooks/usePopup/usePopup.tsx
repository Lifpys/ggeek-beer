export default function usePopup({ popup }: { popup?: string } = {}) {
  // 팝업 호출
  // const getPopup = useQuery(["popup", popup], () =>
  //   api.popup.getPopup(),
  // { refetchOnWindowFocus: false, enabled: !!popup });

  // 팝업 숨기기
  const hidePopup = (day = 1) => {
    var now = new Date();
    now.setTime(now.getTime() + 86400000 * day);
    document.cookie = "popup=hide; expires=" + now.toUTCString() + "; path=/;";
  };

  return {
    // getPopup,
    hidePopup,
  };
}
