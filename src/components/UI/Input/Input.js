import React from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={styles.form__group}>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placehoder}
        id={props.id}
        value={props.value}
        className={props.className}
        required={props.required}
        onChange={props.onChange}      
      />
    </div>
  );
};

export default Input;
