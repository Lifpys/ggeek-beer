// 정규식
const regex = {
  password:
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  id: /^[a-zA-Z0-9]{3,}$/,
  phone: /^\d{3}-\d{4}-\d{4}$/,
};

// 하이픈 템플릿
const hyphenTemplate = {
  phone: [3, 4, 4],
  account: [4, 3, 6],
  card: [4, 4, 4, 4],
  business: [3, 2, 5],
};

// 데이터 검사
const required = (value: any): boolean => {
  if (typeof value === "string") return !value?.toString().trim().length;
  if (Array.isArray(value)) return value?.length === 0;
  if (typeof value === "object") return Object.keys(value)?.length === 0;
  return true;
};
const password = (value: string): boolean => !regex.password.test(value);
const email = (value: string): boolean => !regex.email.test(value);
const id = (value: string): boolean => !regex.id.test(value);
const phone = (value: string): boolean => !regex.phone.test(value);

// 하이픈 Formatting
function hyphen(
  setValue: React.Dispatch<React.SetStateAction<any>>,
  template: number[] | string
): (event: React.ChangeEvent<HTMLInputElement>) => void {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    value = value?.replace(/[^0-9]/gi, "");
    value = value?.replace(/-/gi, "");

    let result = "";
    let startIndex = 0;
    const newTemplate =
      typeof template === "string"
        ? hyphenTemplate[template as keyof typeof hyphenTemplate]
        : template;

    for (let i = 0; i < newTemplate.length; i++) {
      const endIndex = startIndex + newTemplate[i];
      result += value?.slice(startIndex, endIndex);
      if (i < newTemplate.length - 1 && value?.length > endIndex) result += "-";
      startIndex = endIndex;
    }
    setValue((e: any) => ({ ...e, [name]: result }));
  };
}

// 소수점 자릿수 제한 Formatting
function decimal(
  value: string,
  natural: number | null = null,
  decimal: number = 0
): string {
  value = decimal
    ? value?.replace(/[^0-9.]/g, "")
    : value?.replace(/[^0-9]/g, "");
  const parts = value?.split(".");
  const naturalPart = parts[0] || "";
  const decimalPart = parts[1] || "";

  if (parts.length > 2) value = parts[0] + "." + parts.slice(1).join("");
  if (natural !== null && naturalPart.length > natural)
    value = naturalPart.slice(0, natural);
  if (decimalPart.length > decimal)
    value = naturalPart + "." + decimalPart.slice(0, decimal);
  return value;
}

// 페이지 스크롤 이동
function scroll(
  id?: null | string | Record<string, string>,
  scrollTo: ScrollLogicalPosition = "center",
  behavior: ScrollBehavior = "smooth"
): void {
  if (id == null) return window.scrollTo(0, 0);
  if (typeof id === "string") {
    return document.getElementById(id)?.scrollIntoView({
      block: scrollTo,
      behavior: behavior,
    });
  }
  if (typeof id === "object") {
    const firstErrorField = Object.keys(id)[0];
    if (firstErrorField) {
      return document.getElementById(firstErrorField)?.scrollIntoView({
        block: scrollTo,
        behavior: behavior,
      });
    }
  }
}

export { required, password, email, id, phone, hyphen, decimal, scroll };

export default {
  required,
  password,
  email,
  id,
  phone,
  hyphen,
  decimal,
  scroll,
};
