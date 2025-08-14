import Styles from "./styles";

interface BasicButtonProps {
  title?: string;
  onClick: () => void;
  className?: string;
}

export default function BasicButton({
  title,
  onClick,
  className,
}: BasicButtonProps) {
  return (
    <Styles.Button type="button" onClick={onClick} className={className}>
      {title}
    </Styles.Button>
  );
}
