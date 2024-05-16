import React from "react";

function NewButton({ handleClick, children }) {
  console.log(`Rendering button ${children}`);

  return (
    <p>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </p>
  );
}

export default React.memo(NewButton);
