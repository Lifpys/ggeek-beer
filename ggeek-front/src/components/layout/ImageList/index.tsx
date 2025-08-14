import Styles from "./styles";
import Image from "next/image";

export default function ImageList({ data }: { data: any }) {
  const { img, title, date } = data;

  return (
    <Styles.Container>
      <div className="img">
        {img && img !== "" && (
          <Image src={img} alt={title} fill sizes="100%" className="img" />
        )}
      </div>

      <p className="title">{title}</p>

      {date && <p className="date">{date}</p>}
    </Styles.Container>
  );
}
