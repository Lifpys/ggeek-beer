import Styles from "./styles";

export default function CategoryTab({
  list,
  tabIndex,
  setTabIndex,
}: {
  list: {
    title: string;
  }[];
  tabIndex: number;
  setTabIndex: (index: number) => void;
}) {
  return (
    <Styles.Container>
      {list.map((item, index) => {
        return (
          <li
            className={`${tabIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => setTabIndex(index)}
          >
            {item.title}
          </li>
        );
      })}
    </Styles.Container>
  );
}
