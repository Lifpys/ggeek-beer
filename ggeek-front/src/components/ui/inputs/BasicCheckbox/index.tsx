import Styles from "./styles";
import { ChangeEvent } from "react";

interface BasicCheckboxProps {
  id?: string;
  checkText?: any;
  white?: boolean;
  checked: boolean;
  labelText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

function BasicCheckbox({
  id,
  checkText,
  white,
  onChange,
  checked,
  labelText,
  children,
}: BasicCheckboxProps) {
  return (
    <Styles.Container>
      {labelText && <p className="labelText">{labelText}</p>}

      <div className="checkboxWrap">
        <label className={`checkboxLabel ${white ? "white" : ""}`}>
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />

          <span className="checkBox"></span>

          {checkText && <span className="checkText">{checkText}</span>}
        </label>

        {children}
      </div>
    </Styles.Container>
  );
}

export default BasicCheckbox;
