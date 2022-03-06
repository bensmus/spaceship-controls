import { useState } from "react";
import classNames from "classnames";

export const ClickablePanel: React.FC<{name: string}> = ({name}) => {
  const [isSelected, setState] = useState(false);
  return (
    <div
      className={classNames("flex-item", {
        selected: isSelected,
        unselected: !isSelected,
      })}
      onClick={() => {
        setState(true);
      }}
    >
      <h2>{name}</h2>
      <canvas></canvas>
    </div>
  );
}
