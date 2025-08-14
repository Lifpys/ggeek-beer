import Styles from "./styles";

function BasicInput({
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
  const { id, labelText, hiddenLabelText, type, name, placeholder, errorText } =
    data;

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

      <input
        autoComplete="off"
        type={type || "text"}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value !== undefined ? value : ""}
        onChange={onChangeEvent}
      />

      {errorText && <p className="errorText">{errorText}</p>}
    </Styles.Container>
  );
}

export default BasicInput;
