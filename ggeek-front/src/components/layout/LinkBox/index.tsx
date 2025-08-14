import Styles from "./styles";
import Image from "next/image";

export default function LinkBox({
  data,
}: {
  data: {
    href: string;
    title: string;
    bg: string;
    desc?: string;
  };
}) {
  const { href, title, desc, bg } = data;
  return (
    <Styles.Container href={href}>
      <div className="title">{title}</div>

      {desc && <div className="desc">{desc}</div>}

      <div className="bg">
        <Image src={bg} alt={title} fill sizes="100%" />
      </div>
    </Styles.Container>
  );
}
