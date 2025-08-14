import Styles from "./styles";

export default function EmptyText({ text }: { text: string }) {
  return <Styles.Container className="emptyText">{text}</Styles.Container>;
}
