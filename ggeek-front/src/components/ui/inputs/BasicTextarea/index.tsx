import Styles from "./styles";

function BasicTextarea({
  value,
  data,
  setInputs,
  onChange,
}: {
  value: any;
  data: any;
  setInputs?: any;
  onChange?: any;
}) {
  const { id, labelText, hiddenLabelText, name, placeholder, errorText } = data;

  const onChangeEvent = (e: any) => {
    const { name, value } = e.target;

    if (onChange) onChange(e);
    else setInputs((e: any) => ({ ...e, [name]: value }));
  };

  return (
    <Styles.Container className={errorText ? "error" : ""}>
      <label htmlFor={id || name} className={labelText ? "" : "sr-only"}>
        {labelText || hiddenLabelText}
      </label>

      <textarea
        autoComplete="off"
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value !== undefined ? value : ""}
        onChange={onChangeEvent}
        rows={10}
      ></textarea>

      {errorText && <p className="errorText">{errorText}</p>}
    </Styles.Container>
  );
}

export default BasicTextarea;
