import React from "react";

const video = (props) => {
  return (
    <div className={styles.form__group}>
      <label>{props.label}</label>
      <video
        type={props.type}
        src={props.src}
        autoPlay="1"
        controls="0"    
      />
    </div>
  );
};

export default video;
