import "./index.scss";

export const Button = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}

    </button>
  );
};
