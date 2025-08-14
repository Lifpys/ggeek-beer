import Styles from "./styles";

export default function FaqList({
  data,
  index,
  faqIndex,
  setFaqIndex,
}: {
  data: {
    question: string;
    answer: string;
  };
  index: number;
  faqIndex: number | null;
  setFaqIndex: (index: number) => void;
}) {
  return (
    <Styles.Container>
      <div
        className={`question ${faqIndex === index ? "active" : ""}`}
        onClick={() => setFaqIndex(index)}
      >
        <p>{data.question}</p>
      </div>

      {faqIndex === index && <div className="answer">{data.answer}</div>}
    </Styles.Container>
  );
}
