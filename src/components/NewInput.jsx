import React from "react";
// eslint-disable-next-line react-refresh/only-export-components
function Input({ type, placeholder }, ref) {
  return <input ref={ref} type={type} placeholder={placeholder} />;
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
