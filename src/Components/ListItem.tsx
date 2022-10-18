import React from "react";

type ListItemProps = {
  className?: string;
  text: string;
  checked?: boolean;
  key: number;
  onChange?: (value: boolean) => void;
};

const ListItem: React.FC<ListItemProps> = ({
  className,
  text,
  checked = false,
  onChange,
}) => {
  const handleOnClick = () => {
    onChange?.(!checked);
  };

  return (
    <div
      className={`list-item${className ? " " + className : ""}`}
      onClick={handleOnClick}
    >
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        style={{ pointerEvents: "none" }}
      />
      <p>{text}</p>
    </div>
  );
};

export default ListItem;

/**
 * Si estas aca es porque te mató la curiosidad... I like it 😏 (?) O bien, dije que abrieras este archivo (?
 *
 * Si no tenes mucha idea de lo que esta pasando, no te preocupes que voy a hablar de esto.
 * Pero basicamente esto es "componetizar"
 */
