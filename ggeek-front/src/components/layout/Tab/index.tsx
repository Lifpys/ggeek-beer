import Styles from "./styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab({
  firstPath,
  list,
}: {
  firstPath: string;
  list: {
    title: string;
    path?: string;
    onClick?: (e: any) => void;
  }[];
}) {
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  return (
    <Styles.Container>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.path}>
              <Link
                className={`${path === item.path ? "active" : ""}`}
                href={`/${firstPath}/${item.path}`}
                onClick={item.onClick}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Styles.Container>
  );
}
