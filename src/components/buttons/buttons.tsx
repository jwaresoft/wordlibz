import "./buttons.css";

/**
 * props for exported button components
 */
type ButtonProps = {
  onClickHandler: () => void;
  label: string;
  color?: string;
};

/**
 * props for common wrapped button
 */
type CommonButtonProps = {
  classes?: Array<string>;
} & ButtonProps;

function CommonButton({ onClickHandler, classes, label }: CommonButtonProps) {
  const classString = classes ? classes.join(" ") : "";
  return (
    <button className={classString} onClick={onClickHandler}>
      {label || ""}
    </button>
  );
}

/**
 * HeaderButton for the Wordlibz Header
 *
 */
export function HeaderButton({ label, onClickHandler }: ButtonProps) {
  const buttonClasses = ["wordlibz-button-common", "wordlibz-header-button"];
  return (
    <CommonButton
      label={label}
      onClickHandler={onClickHandler}
      classes={buttonClasses}
    />
  );
}

/**
 * Button in App
 *
 */
export function Button({ label, onClickHandler }: ButtonProps) {
  const buttonClasses = ["wordlibz-button-common", "wordlibz-button"];
  return (
    <CommonButton
      label={label}
      onClickHandler={onClickHandler}
      classes={buttonClasses}
    />
  );
}
