const BASE_URL = "/api";
const IMAGEPATH = "http://admin.timebridge.co.kr";

const QUERY_OPTIONS = {
  staleTime: 20000,
  cacheTime: 300000,
  refetchOnWindowFocus: false,
};

const camelToSnake = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const connector = {
  connectFetchController: async (
    path: string,
    body?: any,
    method?: string,
    callBack?: (data: any) => void,
    errorCallBack?: (error: any) => void
  ) => {
    const formData = new FormData();
    formData.append("url", path);
    body &&
      Object.entries(body).forEach(([key, value]) => {
        formData.append(camelToSnake(key), value as any);
      });
    return fetch(BASE_URL, {
      method: method || "POST",
      body: formData,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (callBack) callBack(data);
        return data;
      })
      .catch(function (e) {
        console.log(e);
        try {
          let data = e.json();
          if (errorCallBack) errorCallBack(e.json());
        } catch (err) {
          if (errorCallBack) errorCallBack(e);
        }
      });
  },

  authConnector: async (
    path: string,
    body?: any,
    method?: string,
    callBack?: (data: any) => void,
    errorCallBack?: (error: any) => void
  ) => {
    const formData = new FormData();
    formData.append("url", path);
    formData.append("usr_uid", localStorage.getItem("token") || "");
    body &&
      Object.entries(body).forEach(([key, value]) => {
        formData.append(camelToSnake(key), value as any);
      });
    return fetch(BASE_URL, {
      method: method || "POST",
      body: formData,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (callBack) callBack(data);
        return data;
      })
      .catch(function (e) {
        console.log(e);
        try {
          let data = e.json();
          if (errorCallBack) errorCallBack(e.json());
        } catch (err) {
          if (errorCallBack) errorCallBack(e);
        }
      });
  },
};

export function getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { connector, BASE_URL, QUERY_OPTIONS, IMAGEPATH };
export default connector;
