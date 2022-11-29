import React, { useState } from "react";
function Ex() {
  const [plus, setPlus] = useState(0);

  const up = () => {
    setPlus((prev) => prev + 1);
  };
  const down = () => {
    setPlus((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{plus}</h1>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
    </div>
  );
}
export default Ex;
